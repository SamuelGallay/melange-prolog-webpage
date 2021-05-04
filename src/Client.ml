open CompatibilityCrap
module Dom = Webapi.Dom
module E = Dom.Element
module D = Dom.Document
module I = Dom.HtmlInputElement

(* ************************************
                    Bindings (CodeJar mostly)
   ************************************ *)

external dangerousCast : E.t -> I.t = "%identity"

module CodeJar = struct
  type t

  external toString : t -> string = "toString" [@@bs.send]

  external updateCode : t -> string -> unit = "updateCode" [@@bs.send]
end

external codeJar : E.t -> ('a -> unit) -> CodeJar.t = "CodeJar" [@@bs.module "codejar/codejar.js"]

(* ************************************
              Utilitaries for DOM manipulation
   ************************************ *)

let body =
  match Dom.document |> D.querySelector "body" with
  | None -> Js.Exn.raiseError "No <body> found !"
  | Some a -> a

let apply f = function None -> () | Some a -> f a

let get_value c = I.value (dangerousCast c)

let set_value c s = I.setValue (dangerousCast c) s

let create_element ?text ?id ?classname ?father ?attributes ?onclick node_type =
  let elt = Dom.document |> D.createElement node_type in
  apply (E.setInnerText elt) text;
  apply (E.setId elt) id;
  apply (E.setClassName elt) classname;
  apply (E.appendChild elt) father;
  apply (E.setOnClick elt) onclick;
  apply (List.iter (fun (attr, value) -> E.setAttribute attr value elt)) attributes;
  elt

(* ************************************
                    Page Construction
   ************************************ *)

(* Containers for the layout *)

let grid_container = create_element ~classname:"grid-container" ~father:body "div"

let left = create_element ~father:grid_container ~classname:"grid-item left" "div"

let right_up = create_element ~father:grid_container ~classname:"grid-item rightup" "div"

let right_middle = create_element ~father:grid_container ~classname:"grid-item rightmiddle" "div"

let right_down = create_element ~father:grid_container ~classname:"grid-item rightdown" "div"

(* Containers for the editors *)

let input_code_div = create_element ~father:left ~classname:"jar" "div"

let input_request_div = create_element ~father:right_middle ~classname:"jar" "div"

let console =
  create_element ~father:right_up ~classname:"console-output" ~attributes:[ ("readonly", "true") ]
    "textarea"

let highlight editor =
  E.innerText editor
  |> Js.String.replaceByRe [%re "/(\\b[a-z]\\w*)/g"] "<font color=\"#48c9b0\">$1</font>"
  |> Js.String.replaceByRe [%re "/(\\b[A-Z]\\w*|\\b_)/g"] "<font color=\"#ff51b3\">$1</font>"
  |> Js.String.replaceByRe [%re "/(,)/g"] "<font color=\"#fffffff\">$1</font>"
  |> Js.String.replaceByRe [%re "/((:-)|\.|\?)/g"] "<font color=\"#ff5733\">$1</font>"
  |> Js.String.replaceByRe [%re "/([\[\]|])/g"] "<font color=\"#71fb1d\">$1</font>"
  |> Js.String.replaceByRe [%re "/([\(\)])/g"] "<font color=\"#fef014\">$1</font>"
  |> E.setInnerHTML editor

let code_jar = codeJar input_code_div highlight

let request_jar = codeJar input_request_div highlight

(* ************************************
                    Logic
   ************************************ *)

(* Helpers *)

let getText jar = CodeJar.toString jar

let setText jar s = CodeJar.updateCode jar s

let display_text s = set_value console (get_value console ^ s ^ "\n")

(* Interpreter *)

let html_interpreter program_string request_string =
  match Prolog.program_of_string program_string with
  | Error s ->
      display_text "Unable to parse program :";
      display_text s
  | Ok parsed_program ->
      (match Prolog.request_of_string request_string with
      | Error s ->
          display_text "Unable to parse request :";
          display_text s
      | Ok parsed_request -> (
          let string_seq = Prolog.string_sequence_of parsed_program parsed_request in
          match string_seq () with
          | Seq.Nil -> display_text "No solution found."
          | Seq.Cons (sol, seq) ->
              display_text sol;
              Seq.iter display_text seq));
      print_newline ()

let execute _ =
  display_text "Executing...\n";
  html_interpreter (getText code_jar) (getText request_jar)

let format_code _ =
  match Prolog.program_of_string (getText code_jar) with
  | Error err -> display_text err
  | Ok prog -> setText code_jar (Prolog.string_of_program prog)

let button = create_element ~father:right_down ~text:"Execute" ~onclick:execute "button"

let button_format =
  create_element ~father:right_down ~text:"Format Code" ~onclick:format_code "button"

let () =
  setText code_jar Examples.zebra_code;
  setText request_jar Examples.zebra_request

let () = display_text "~ Welcome to my small Prolog interpreter!\n"

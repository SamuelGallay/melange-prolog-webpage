open CompatibilityCrap
module Dom = Webapi.Dom
module E = Dom.Element
module D = Dom.Document
module I = Dom.HtmlInputElement

(* ************************************
                    Bindings (ACE editor mostly)
   ************************************ *)

external ace : unit = "default" [@@bs.module "ace-builds/src-min-noconflict/ace.js"]

let () = ace

external dangerousCast : E.t -> I.t = "%identity"

module Editor = struct
  type t

  external getValue : t -> string = "getValue" [@@bs.send]

  external setValue : t -> string -> unit = "setValue" [@@bs.send]

  external create : string -> t = "edit" [@@bs.val] [@@bs.scope "ace"]
end

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

let input_code_div = create_element ~father:left ~id:"editor-code" "div"

let input_request_div = create_element ~father:right_middle ~id:"editor-request" "div"

let editor_code = Editor.create "editor-code"

let editor_request = Editor.create "editor-request"

let console =
  create_element ~father:right_up ~classname:"console-output" ~attributes:[ ("readonly", "true") ]
    "textarea"

(* ************************************
                    Logic
   ************************************ *)

let display_text s = set_value console (get_value console ^ s ^ "\n")

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
  let program = Editor.getValue editor_code in
  let request = Editor.getValue editor_request in
  html_interpreter program request

let format_code _ =
  let program_string = Editor.getValue editor_code in
  match Prolog.program_of_string program_string with
  | Error err -> display_text err
  | Ok prog -> Editor.setValue editor_code (Prolog.string_of_program prog)

let button = create_element ~father:right_down ~text:"Execute" ~onclick:execute "button"

let button_format =
  create_element ~father:right_down ~text:"Format Code" ~onclick:format_code "button"

let () =
  Editor.setValue editor_code Examples.zebra_code;
  Editor.setValue editor_request Examples.zebra_request

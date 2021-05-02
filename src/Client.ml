open CompatibilityCrap
module Dom = Webapi.Dom
module E = Dom.Element
module D = Dom.Document
module I = Dom.HtmlInputElement

let body =
  match Dom.document |> D.querySelector "body" with
  | None -> Js.Exn.raiseError "No <body> found !"
  | Some a -> a

let apply f = function None -> () | Some a -> f a

external dangerousCast : E.t -> I.t = "%identity"

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

let grid_container = create_element ~classname:"grid-container" ~father:body "div"

let left = create_element ~father:grid_container ~classname:"grid-item left" "div"

let right_up = create_element ~father:grid_container ~classname:"grid-item rightup" "div"

let right_middle = create_element ~father:grid_container ~classname:"grid-item rightmiddle" "div"

let right_down = create_element ~father:grid_container ~classname:"grid-item rightdown" "div"

let input_code = create_element ~father:left ~classname:"editor-input" "textarea"

let input_request = create_element ~father:right_middle ~classname:"editor-input" "textarea"

let console =
  create_element ~father:right_up ~classname:"console-output" ~attributes:[ ("readonly", "true") ]
    "textarea"

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
  let program = get_value input_code in
  let request = get_value input_request in
  html_interpreter program request

let button = create_element ~father:right_down ~text:"Execute" ~onclick:execute "button"

let () =
  set_value input_code Examples.zebra_code;
  set_value input_request Examples.zebra_request

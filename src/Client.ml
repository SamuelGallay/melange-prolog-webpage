open Webapi.Dom
open CompatibilityCrap

let display_text s = 
    match document |> Document.querySelector("body") with
    | None -> ()
    | Some body ->
        let p = document |> Document.createElement("p") in
        Element.setInnerText p s;
        Element.appendChild p body

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

let () = 
    display_text "Hello melange!!";
    html_interpreter "a." "X?"

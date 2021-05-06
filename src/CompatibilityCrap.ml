(* ************************************
            JavaScript Compatibility
   ************************************ *)

let ( @ ) a b = List.concat [ a; b ]

let print_newline () = print_endline "\n"

module Option = struct
  let bind a f = match a with Some b -> f b | None -> None

  let map f = function Some a -> Some (f a) | None -> None
end

(* From the OCaml source code : *)
module Seq = struct
  type +'a node = Nil | Cons of 'a * 'a t

  and 'a t = unit -> 'a node

  let empty () = Nil

  let return x () = Cons (x, empty)

  let cons x next () = Cons (x, next)

  let rec append seq1 seq2 () =
    match seq1 () with Nil -> seq2 () | Cons (x, next) -> Cons (x, append next seq2)

  let rec flat_map f seq () =
    match seq () with Nil -> Nil | Cons (x, next) -> append (f x) (flat_map f next) ()

  let rec map f seq () = match seq () with Nil -> Nil | Cons (x, next) -> Cons (f x, map f next)

  let iter f seq =
    let rec aux seq =
      match seq () with
      | Nil -> ()
      | Cons (x, next) ->
          f x;
          aux next
    in
    aux seq
end

module List = struct
  include List

  let concat_map f l = List.concat (List.map f l)

  let rec filter_map f = function
    | [] -> []
    | h :: t -> ( match f h with Some a -> a :: filter_map f t | None -> filter_map f t)
end

module Result = struct
  let map f = function Error e -> Error e | Ok a -> Ok (f a)

  let bind res f = match res with Error e -> Error e | Ok a -> f a
end

let zebra_code =
  "member(X, [X | Xs]).
member(X, [Y | Ys]) :- member(X, Ys).
isright(L, R, [L, R | T]).
isright(L, R, [H | T]) :- isright(L, R, T).
nextto(A, B, X) :- isright(A, B, X).
nextto(A, B, X) :- isright(B, A, X).
equal(X, X).
zebra(H, W, Z):-
equal(H, [[norwegian, _, _, _, _], _, [_, _, _, milk, _], _, _]),
member([englishman, _, _, _, red], H),
member([spaniard, dog, _, _, _], H),
member([_, _, _, coffee, green], H),
member([ukrainian, _, _, tea, _], H),
member([_, snails, winston, _, _], H),
member([_, _, kools, _, yellow], H),
member([_, _, luckystrike, orangejuice, _], H),
member([japanese, _, parliaments, _, _], H),
nextto([norwegian, _, _, _, _], [_, _, _, _, blue], H),
isright([_, _, _, _, ivory], [_, _, _, _, green], H),
nextto([_, _, chesterfields, _, _], [_, fox, _, _, _], H),
nextto([_, _, kools, _, _], [_, horse, _, _, _], H),
member([W, _, _, water, _], H),
member([Z, zebra, _, _, _], H).
"

let zebra_request = "zebra(Houses, WaterDrinker, ZebraOwner)?"

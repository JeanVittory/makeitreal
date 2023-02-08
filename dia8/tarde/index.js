/*
Escribir una función que tome un objeto como argumento. El objeto contiene dos propiedades, 
upvotes y downvotes. Devuelve el número de votos a favor menos el número de votos en contra.
*/

function getVoteCount({ upvotes = 0, downvotes = 0 }) {
	return upvotes - downvotes;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));

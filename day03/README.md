# Day 3: [Corruption Checksum][day]

## Part 1

Oh wow. If the previouys days were easy, this is payback. I've never done anything like this before, so this is a tabula rasa. 

It was a very busy week at work, so besides being a few days behind, I've also had some time to let this one stew in my head. 

The first thing I wanted to do was to generate a spiral. Finding the Manhattan Distance from any value to the center seems like it would be a simple lookup problem --basically just vector math -- once there was a spiral to look values up in.

Before jumping into a naive loop, put aside the differences between zero-indexed and naturally-counted spirals. This will be an array, so even n^2 indexes will appear in the upper-left and odd n^2 indexes will appear in the lower-right. The displayed number system is sort of irrelevant. 

The biggest issue with a naive loop is that we can't use negative indexes. JavaScript sort of allow them, but they just arbitrary properties of that array/object instance, and aren't considered part of the array.<sup id="ref1">[1](#f1)</sup> Though because we know the opposite corners define the dimensions,  the overall grid dimensions will be no larger than `Math.ceil(Math.sqrt(n))`.

I should also note going into this, I expect Part 2 to throw some sort of horrible wrench into the works. Something like reversing spin or a non-square grid. 





---

 <strong>1</strong> From [MDN Web docs: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) [↩](#ref1)
 <blockquote>Arrays cannot use strings as element indexes (as in an associative array), but must use integers. Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection. The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.</blockquote>

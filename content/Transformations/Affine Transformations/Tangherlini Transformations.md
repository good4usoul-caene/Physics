
[Chandru Iyer](https://www.researchgate.net/profile/Chandru-Iyer?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6Il9kaXJlY3QiLCJwYWdlIjoicXVlc3Rpb24iLCJwb3NpdGlvbiI6InBhZ2VDb250ZW50In19)

Thank you for your answer.

In it's common form, I think you have written something like:

t'=\gamma t

x'=\gamma( x - vt )

So in this case we are converting FROM the preferred frame TO the non-preferred frame. This makes the preferred frame distances longer, and the preferred frame times faster.

The inverse transformation is

t=1/gamma t'

x=(x' +v t')//gamma

This does the inverse transformation, so that we come back to the preferred frame's slower time, and shorter length.

I would note an important conceptual difference here, though:

The inverse transformation as written is only good for taking us back to the preferred frame. We can't just put any old boost velocity into the inverse transformation as written and expect it to work. Because the original transformation was "From preferred frame to nonpreferred frame", the final transformation has to be "from nonpreferred frame to preferred frame."

If a rotation transformation worked like that... We could rotate 20 degrees to the left, but the only allowed rotation afterwards was to rotate back, 20 degrees to the right. We would think that was strange.

The Lorentz Transformations where the forward transformation represents shifting to the point-of-view of the avatar, and the reverse transformation represents an outside perspective seeing the changes in the avatar. Both forward and inverse transformation work on any boost velocity.

It might be helpful, though, to figure out the precise changes needed to fix the inverse tangherlini transformation so that it can switch directly from one non-preferred frame to another non-preferred frame. A matrix composition would do the trick.

Using the matrix composition approach, I believe the transformation of interest that goes from the non-preferred frame of velocity v_1 to the non-preferred frame of velocity v_2 would be

t''=gamma_2/gamma_1 t'

x''=gamma_2/gamma_1(v2-v1)t'+gamma_2/gamma_1 x'

Does this match your intuition? That special measures must be made to go from one non-prerred frame to another non-preferred frame?
| Demo                                                                | Info                                                                                                                        |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [Tangherlini Attempt](https://www.desmos.com/calculator/wraz9gwgmq) | This demonstration offers a slider showing options for four different "Transformations"  of the circular reflecting mirror. |

The Tangherlini Transformations apply a Galilean Transformation, followed by a length "un-contraction" ($\gamma$) and a time "un-dilation" ($\frac{1}{\gamma}$).  In essence we imagine that we in the "preferred" frame of reference see everything in it's natural state.  Normal lengths and normal times.   Then we imagine the avatars of non-preferred frames having slower clocks and shorter distances.  In order for this to be the case, though, without invoking the relativity of simultaneity, such avatars would have to see the "preferred frame" clocks running fast, and the "preferred frame" rulers being stretched.

A clear mathematical comparison of Galilean, Tangherlini, and Lorentz Transformations can be obtained with the following matrix compositions.

Dimensionless matrix version
$$\begin{pmatrix}ct'\\x'\\y'\end{pmatrix}=\overset{\text{Lorentz}}{\boxed{\begin{pmatrix}1&-\beta&0\\0&1&0\\0&0&1\\\end{pmatrix}
\overset{\text{Tangherlini}}{\boxed{\begin{pmatrix}\gamma^{-1}&0&0\\0&\gamma&0\\0&0&1\end{pmatrix}
\overset{\text{Galilean}}{\boxed{\begin{pmatrix}1&0&0\\-\beta&1&0\\0&0&1\end{pmatrix}}}}}}}\begin{pmatrix}ct\\x\\y\end{pmatrix}$$

Dimensioned matrix version:
$$\begin{pmatrix}t'\\x'\\y'\end{pmatrix}=\overset{\text{Lorentz}}{\boxed{\begin{pmatrix}1&-\frac{\beta}{c}&0\\0&1&0\\0&0&1\\\end{pmatrix}
\overset{\text{Tangherlini}}{\boxed{\begin{pmatrix}\gamma^{-1}&0&0\\0&\gamma&0\\0&0&1\end{pmatrix}
\overset{\text{Galilean}}{\boxed{\begin{pmatrix}1&0&0\\-{\beta}{c}&1&0\\0&0&1\end{pmatrix}}}}}}}\begin{pmatrix}t\\x\\y\end{pmatrix}$$

Or, if expressions with $v$ are preferred, 
$$\begin{pmatrix}t'\\x'\\y'\end{pmatrix}=\overset{\text{Lorentz}}{\boxed{\begin{pmatrix}1&-\frac{v}{c^2}&0\\0&1&0\\0&0&1\\\end{pmatrix}
\overset{\text{Tangherlini}}{\boxed{\begin{pmatrix}\gamma^{-1}&0&0\\0&\gamma&0\\0&0&1\end{pmatrix}
\overset{\text{Galilean}}{\boxed{\begin{pmatrix}1&0&0\\-v&1&0\\0&0&1\end{pmatrix}}}}}}}\begin{pmatrix}t\\x\\y\end{pmatrix}$$

$$t'= \frac{t}{\gamma}\\x'=\gamma( x - vt )$$

Let's see what this transformation does to $$(t_r,x_r)=(t_r,ct_r)$$ and $$(t_l,x_l)=(t_l,-ct_l)$$ 
$$\begin{pmatrix}\begin{pmatrix}t_l'\\x_l'\end{pmatrix}&\begin{pmatrix}t_r'\\x_l'\end{pmatrix}\end{pmatrix}=\begin{pmatrix}\frac{1}{\gamma}&0\\-\gamma v&\gamma\end{pmatrix}\begin{pmatrix}\begin{pmatrix}t_l\\-ct_l\end{pmatrix}&\begin{pmatrix}t_r\\ct_r\end{pmatrix}\end{pmatrix}$$
$$=\begin{pmatrix}\begin{pmatrix}\frac{t_l}{\gamma}\\\gamma(-c-v)t_l\end{pmatrix}&\begin{pmatrix}\frac{t_r}{\gamma}\\\gamma(c-v)t_r\end{pmatrix}\end{pmatrix}$$

To find the new speed of light in the non-preferred frame, we take
$$\frac{x_r'}{t_r'}=\frac{\gamma(-v+c)t_r}{(t_r/\gamma)}=\gamma^2(-v+c)$$
$$\frac{x_l'}{t_l'}=\frac{\gamma(-v-c)t_l}{(t_l/\gamma)}=\gamma^2(-v-c)$$
Because the Tangherlini transformation stretches the $x$ coordinate, we have a greater distance, and because it shrinks the $t$ coordinate, we do things in less time.  
### The inverse Tangherlini Transformation

So in this case we are converting FROM the preferred frame TO the non-preferred frame. This makes the preferred frame distances longer, and the preferred frame times faster.

The inverse transformation that takes things back to the preferred frame is as follows:

$$t=\gamma t'$$

$$x=\frac{(x' +v t')}{\gamma}$$

...or $$\begin{pmatrix}t\\x\end{pmatrix}=\begin{pmatrix}{}{\gamma}&0\\\frac{v}{\gamma}&\frac{1}{\gamma}\end{pmatrix}\begin{pmatrix}\end{pmatrix}$$

>[!info]- But this only takes us back to the preferred frame.  
>
>The inverse transformation as written is only good for taking us back to the preferred frame. We can't just put any old boost velocity into the inverse transformation as written and expect it to work. Because the original transformation was "From preferred frame to nonpreferred frame", the final transformation has to be "from nonpreferred frame to preferred frame."
>
>If a rotation transformation worked like that... We could rotate 20 degrees to the left, but the only allowed rotation afterwards was to rotate back, 20 degrees to the right. We would think that was strange.
>
>The Lorentz Transformations where the forward transformation represents shifting to the point-of-view of the avatar, and the reverse transformation represents an outside perspective seeing the changes in the avatar. Both forward and inverse transformation work on any boost velocity.

What if we want to go from one non-preferred frame to another non-preferred frame?  We can use a matrix composition to do this as well.  

To go from non-preferred frame 1 (primed coordinates) to non-preferred frame 2 (double-primed coordinates), we use:

$$\begin{pmatrix}t''\\x''\end{pmatrix}=\begin{pmatrix}\frac{1}{\gamma_2}&0\\-\gamma_2 v_2&\gamma_2\end{pmatrix}\begin{pmatrix}\gamma_1&0\\\frac{v_1}{\gamma_1}&\gamma_1\end{pmatrix}\begin{pmatrix}t'\\x'\end{pmatrix}$$

$$=\begin{pmatrix}\frac{\gamma_1}{\gamma_2}&0\\\gamma_2\left(\frac{1}{\gamma_1}v_1-\gamma_1v_2\right)&\gamma_1\gamma_2\end{pmatrix}\begin{pmatrix}t'\\x'\end{pmatrix}$$

>[!info]- This does not match with my earlier calculation:
>
>$$t''=\frac{\gamma_2}{\gamma_1} t'$$
>
>$$x''=\gamma_2/\gamma_1(v_2-v_1)t'+\gamma_2/\gamma_1 x'$$
>
>I need to check a couple more times to see what is the correct formula.

### Further things to check.

What is the "mean velocity" of these two beams on an out and back journey, and compare to the "harmonic mean velocity" and see if they are the same.  I guess that all depends on what you mean by an "out and back journey."  Are you going out and back from/to moving points, or going out and back from/to stationary points?


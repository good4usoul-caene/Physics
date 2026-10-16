**Motivation**

 - A global description of the behavior of a system could include everything that happens to it for all time.  
 - It is often the case in the real world where a function models the behavior of a system, where the function is either not known globally, or there is just no interest in the global behavior of the system.  For instance, when making an analysis of the behavior of shock absorbers, it is desirable to know the immediate effect of hitting a bump.  **But only one bump**.  A global function describing the shock absorber's compression would include another bump that it hit last week, and another bump that it hit last month.  So while technically **an infinite polynomial expression could capture the compression of the shock absorbers for all time**, physicists and engineers are almost never interested in anything other than the effects of a single bump. 

**Other names:**
 - Local Linearity/Local Polynomial Approximation
 - The **Jet** of a function: (0-jet, 1-jet, 2-jet) (for all three zoom levels)
 - The **Tangent Approximation Principle** (for First order approximation)

**Exceptions:**
 - This principle fails at a point where a function has a kink or discontinuity.  At such points, derivatives do not exist, so no polynomial can match the function’s behavior.
 - Kinks and discontinuities are often used as boundary conditions for the smooth behavior.  For instance a sudden jolts to a system, such as a throw, block, or bounce may provide initial or final times, positions, and velocities.
 - The principle fails outside the domain where a function is known.  See [[Known and Unknown Functions]]

**Use**
 - Obtaining information about a function that is valid over three small regions of applicability.
 - Applying the [[Equivalence Principle]] correctly:  modeling the behavior of light and matter in *local* gravitational environments.

**Misuse**
 - Applying the [[Equivalence Principle]] globally -- claiming that gravity is indistinguishable from acceleration everywhere, rather than only in sufficiently small regions.  
 - **Personal Anecdote** For instance, I have seen someone describing the [[Twin Paradox]] saying that the traveling twin ought not be permitted to look out the window during his journey to watch the receding and oncoming image of the earth.  
## Description
The zoom-in principle is that when one has a smooth function, $f(x)$, it is always possible to "zoom in" or "consider a domain" around $a$ such that:
### Closest Zoom:
At closest zoom, the function simply does not change.  The graph would look like a horizontal line.  
$$f(x-a)=c_0$$
### First Order Approximation
Zooming out a little, the line is no longer horizontal, but sloped:
$$f(x-a)=c_0+c_1(x-a)$$
### Second Order Approximation
Zooming out further, a small amount of curvature may be observable in the function
$$f(x-a)=c_0+c_1(x-a)+c_2(x-a)^2$$

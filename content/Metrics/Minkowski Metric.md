
In [[Einstein Notation]] the Minkowski Metric is generally written as $\eta_{\mu\nu}$, with one of it's simplest applications being a calculation of $cd\tau$ from a timelike differential path element

$$(cd\tau)^2=dx^{\mu}\eta_{\mu\nu}dx^\nu$$ or $$-ds^2=dx^{\mu}\eta_{\mu\nu}dx^\nu$$
### Two main forms

There are two main forms of the tensor $\eta_{\mu\nu}$ depending on whether you want $dx^{index}$ to index $(dt,dx,dy,dz)$ or $(cdt,dx,dy,dz)$.

### Non-Dimensional Form

For this case, time is already multiplied by the speed of light, rendering it as a literal distance on  a space-time plot, though this should not be interpreted as changing time into space.

With the latter, all terms in $\eta_{\mu\nu}$ are 1 or -1:

$$
ds^2=\begin{pmatrix}cdt&dx&dy&dz\end{pmatrix}\begin{pmatrix}-1&0&0&0\\0&1&0&0\\0&0&1&0\\0&0&0&1\end{pmatrix}\begin{pmatrix}cdt\\dx\\dy\\dz\end{pmatrix}
$$
### Dimensioned form

With the former, all terms in $\eta_{\mu\nu}$ are 1 or $-c^2$: 

$$
d\tau^2=
\overset{dx^\mu\rightarrow}{\boxed{\begin{pmatrix}dt&dx&dy&dz\end{pmatrix}}}
\overset{\eta_{\mu\nu}}{\boxed{\overset{\mu}{\downarrow}\overset{\nu\rightarrow}{\begin{pmatrix}-c^2&0&0&0\\0&1&0&0\\0&0&1&0\\0&0&0&1\end{pmatrix}}}}
\overset{dx^{\overset{\nu}{\downarrow}}}{\boxed{ \begin{pmatrix} dt\\dx\\dy\\dz \end{pmatrix}}}
$$


### Examples

We wish to show that two different versions of the Lorentz Transformed differential path element  provide invariant results using the Minkowski Metric $\eta_{\mu\nu}$, 

### Case 1
Case 1, show 

$$
{\boxed{L\begin{pmatrix}c dt&dx\end{pmatrix}}} \boxed \eta {\boxed{L\begin{pmatrix}cdt\\dx\end{pmatrix}}}=\begin{pmatrix}c dt&dx\end{pmatrix}\eta\begin{pmatrix}c dt\\dx\end{pmatrix}
$$
Or 

$$
J^T\eta J = \eta
$$

Case 1 is, for now, left to the reader as an exercise.
### Case 2

Given 
$$
ds^2(dt, dx)=\begin{pmatrix}dt&dx\end{pmatrix}
\begin{pmatrix}-c^2&0\\0&1\end{pmatrix}
\begin{pmatrix}dt\\dx\end{pmatrix}
$$

, Show that when the Inverse Lorentz Transformation is applied, 

$$
\begin{pmatrix}t\\x\end{pmatrix}=\begin{pmatrix}\gamma&\frac{\sigma}{c}\\c\sigma&\gamma\end{pmatrix}\begin{pmatrix}t'\\x'\end{pmatrix}
$$
that the same relation holds for $ds^2(dt',dx')$.

This is the same as showing 

$$
J^T\eta J=\eta
$$

 where 

$$
\eta = \begin{pmatrix}-c^2&0\\0& 1\end{pmatrix}
$$ 

$$
ds^2=\overset{\begin{pmatrix}dt&dx\end{pmatrix}}{\boxed{\begin{pmatrix}dt'&dx'\end{pmatrix}\frac{\partial(t,x)\rightarrow}{\partial(t',x')\downarrow}}}\eta\overset{d(t,x)\downarrow}{\boxed{\frac{\partial(t,x)\downarrow}{\partial(t',x')\rightarrow}\begin{pmatrix}dt'\\dx'\end{pmatrix}}}
$$

$$
ds^2=
\begin{pmatrix}dt'&dx'\end{pmatrix}
\begin{pmatrix}\gamma&c\sigma\\\frac{\sigma}{c}&\gamma\end{pmatrix}
\begin{pmatrix}-c^2&0\\0&1\end{pmatrix}\begin{pmatrix}\gamma&\frac{\sigma}{c}\\c\sigma&\gamma\end{pmatrix}\begin{pmatrix}dt'\\dx'\end{pmatrix}
$$

$$
\begin{pmatrix}dt'&dx'\end{pmatrix}
\begin{pmatrix}\gamma&c\sigma\\\frac{\sigma}{c}&\gamma\end{pmatrix}
\begin{pmatrix}-\gamma c^2&-c\sigma\\c\sigma&\gamma\end{pmatrix}
\begin{pmatrix}dt'\\dx'\end{pmatrix}
$$

$$
=\begin{pmatrix}dt'&dx'\end{pmatrix}
\begin{pmatrix}\gamma&c\sigma\\\frac{\sigma}{c}&\gamma\end{pmatrix}
\begin{pmatrix}-\gamma c^2&-c\sigma\\c\sigma&\gamma\end{pmatrix}
\begin{pmatrix}dt'\\dx'\end{pmatrix}
$$

$$
=\begin{pmatrix}dt'&dx'\end{pmatrix}
\begin{pmatrix}(-\gamma^2+\sigma^2)c^2&\gamma\sigma(c-c)\\\gamma\sigma(c-c)&\gamma^2-\sigma^2\end{pmatrix}
\begin{pmatrix}dt'\\dx'\end{pmatrix}
$$

$$
\begin{pmatrix}dt&dx\end{pmatrix}
\begin{pmatrix}-c^2&0\\0&1\end{pmatrix}
\begin{pmatrix}dt\\dx\end{pmatrix}=\begin{pmatrix}dt'&dx'\end{pmatrix}
\begin{pmatrix}-c^2&0\\0&1\end{pmatrix}
\begin{pmatrix}dt'\\dx'\end{pmatrix}
$$
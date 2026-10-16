
It is intended that this page should obtain two valid metrics, for coordinates $(ct,x)$ and for coordinates $(t,x)$

We begin with the Lorentz Transformation to rapidity $\eta$ in one-dimension where $\sigma=\sinh\eta$ and $\gamma=\cosh\eta$.

With $(ct,x)$, the transformation is:

$$\begin{pmatrix}ct'\\x'\end{pmatrix}=\begin{pmatrix}\gamma&-\sigma\\-\sigma&\gamma\end{pmatrix}\begin{pmatrix}ct\\x\end{pmatrix}$$
With $(t,x)$, the transformation is

$$\begin{pmatrix}t'\\x'\end{pmatrix}=\begin{pmatrix}\gamma&-\frac{c}{\sigma}\\-c\sigma&\gamma\end{pmatrix}\begin{pmatrix}t\\x\end{pmatrix}$$

### The (ct,x) case:

For the first case, the metric tensor is simple:

$$\overset{(ct',x')\rightarrow}{\boxed{\begin{pmatrix}ct&x\end{pmatrix}\begin{pmatrix}\gamma&-\sigma\\-\sigma&\gamma\end{pmatrix}}}
\begin{pmatrix}-1&0\\0&1\end{pmatrix}
\overset{(ct',x')\downarrow}{\boxed{\begin{pmatrix}\gamma&-\sigma\\-\sigma&\gamma\end{pmatrix}\begin{pmatrix}ct\\x\end{pmatrix}}}$$
$$=\overset{(ct',x')\rightarrow}{\boxed{\begin{pmatrix}ct&x\end{pmatrix}\begin{pmatrix}\gamma&-\sigma\\-\sigma&\gamma\end{pmatrix}}}
\begin{pmatrix}-\gamma&\sigma\\-\sigma&\gamma\end{pmatrix}\begin{pmatrix}ct\\x\end{pmatrix}$$
$$=\begin{pmatrix}ct&x\end{pmatrix}\begin{pmatrix}-\gamma^2+\sigma^2&(1-1)\sigma\gamma
\\(1-1)\sigma\gamma&-\sigma^2+\gamma^2\end{pmatrix}\begin{pmatrix}ct\\x\end{pmatrix}$$
$$=\begin{pmatrix}-1&0\\0&1\end{pmatrix}$$

### Why that's not what we wanted:
The Jacobian should be


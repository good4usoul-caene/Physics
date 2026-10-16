
$$\Align{x&=r\cos\phi
\\y&=r\sin\phi}$$

The rectangular-to-polar transformation is a [[Descriptive and Perspectival Transformations|Descriptive Transformation]]  that converts from "Minkowski Ready" coordinates $(x,y)$ to "Minkowski unready" coordinates $(r,\phi)$

We can obtain a [[metric tensor]] for this transformation by first obtaining the Jacobian:

$$J^{x,y}_{r,\phi}=\Pfrac{(x,y)\rightarrow}{(r,\phi)\downarrow}$$
$$=\Pfrac{(r\cos\phi,r\sin\phi)\rightarrow}{(r,\phi)\downarrow}$$
$$=\begin{pmatrix}\cos\phi&\sin\phi\\-r\sin\phi&r\cos\phi\end{pmatrix}$$
Now, why have we calculated this?

It can be shown:
$$\overset{\rightarrow }{d(x,y)}=\overset \rightarrow {d(r,\phi)} \Pfrac{(x,y)\rightarrow}{(r,\phi)\downarrow}$$
$$\begin{pmatrix}dx&dy\end{pmatrix}=\begin{pmatrix} \cos\phi dr-rd\phi\sin\phi &\sin\phi dr + rd\phi\cos\phi \end{pmatrix}$$
The **transpose** of all of this has essentially the same result.
$$\downarrow d(x,y)=\Pfrac{(x,y)\downarrow}{(r,\phi)\rightarrow}\downarrow d(r,\phi)$$
$$\begin{pmatrix}dx\\dy\end{pmatrix}=\begin{pmatrix}\cos\phi & -r\sin\phi \\\sin\phi&r\cos\phi\end{pmatrix}\begin{pmatrix}dr\\d\phi\end{pmatrix}$$
$$=\begin{pmatrix}\cos\phi dr -rd\phi \sin\phi\\\sin\phi dr+rd\phi\cos\phi \end{pmatrix}$$
We're going to put an identity matrix between these two results for reasons that will become apparent later, and recognize that this has been a highly round-about way of obtaining the Pythagorean Theorem.

$$\Align{dr^2&=dx^2+dy^2
\\&=\begin{pmatrix}dx&dy\end{pmatrix}\begin{pmatrix}1&0\\0&1\end{pmatrix}\begin{pmatrix}dx\\dy\end{pmatrix}
\\&=\left(\begin{pmatrix}dr&d\phi\end{pmatrix}
\Pfrac{(x,y)\rightarrow}{(r,\phi)\downarrow}\right)\begin{pmatrix}1&0\\0&1\end{pmatrix}
\left(
\Pfrac{(x,y)\downarrow}{(r,\phi)\rightarrow}
\begin{pmatrix}dr\\d\phi\end{pmatrix}\right)}$$
Now we remove the $\begin{pmatrix}dr&d\phi\end{pmatrix}$ and $\begin{pmatrix}dr\\d\phi\end{pmatrix}$ sandwich and have the meat:

$$\begin{pmatrix}\cos\phi&\sin\phi\\-r\sin\phi&r\cos\phi\end{pmatrix}\begin{pmatrix}1&0\\0&1\end{pmatrix}\begin{pmatrix}\cos\phi & -r\sin\phi \\\sin\phi&r\cos\phi\end{pmatrix}$$

$$=\begin{pmatrix}\cos^2\phi+\sin^2\phi&r\cos\phi\sin\phi-r\cos\phi\sin\phi\\r\cos\phi\sin\phi-r\cos\phi\sin\phi&r^2\sin^2\phi+r^2\cos^2\phi\end{pmatrix}$$
$$=\begin{pmatrix}1&0\\0&r^2\end{pmatrix}$$
Now, putting the sandwich back in place, we can obtain:
$$dr^2=\begin{pmatrix}dr&d\phi\end{pmatrix}\begin{pmatrix}1&0\\0&r^2\end{pmatrix}\begin{pmatrix}dr\\d\phi\end{pmatrix}$$
If we'd prefer to keep the metric looking neat, we could use, instead:
$$dr^2=\begin{pmatrix}dr&r d\phi\end{pmatrix}\begin{pmatrix}1&0\\0&1\end{pmatrix}\begin{pmatrix}dr\\r d\phi\end{pmatrix}$$

### Was this overkill?
Once we had $$\begin{pmatrix}dx\\dy\end{pmatrix}=\begin{pmatrix}\cos\phi dr -rd\phi \sin\phi\\\sin\phi dr+rd\phi\cos\phi \end{pmatrix}$$
it probably should not have taken us much effort to find
$$\Align{dr^2&=dx^2+dy^2\\&=dr^2+(rd\phi)^2}$$
The Jacobian expression helps us to keep things organized if we actually know what the Jacobian expression is.  


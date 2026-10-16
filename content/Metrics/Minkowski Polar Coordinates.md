We can begin with the metric expansion of Minkowski coordinates in 2 spatial dimensions:

$$-(cd\tau)^2=\overset{\rightarrow}{d(ct,x,y)}\begin{pmatrix}-1&0&0\\0&1&0\\0&0&1\end{pmatrix}d(ct,x,y)\downarrow$$

We should first establish the stationary [[Metric Tensor in Polar Coordinates]]

$$ct=ct
\\x=r\cos\phi
\\y=r\sin\phi$$
$$d(ct,x,y)\downarrow=\frac{\partial(ct,x,y)\downarrow}{\partial(ct,r,\phi)\rightarrow}d(ct,r,\phi)\downarrow$$
$$=\begin{pmatrix}
\begin{matrix}\frac{\partial ct}{\partial ct}&\frac{\partial ct}{\partial r}&\frac{\partial ct}{\partial\phi}\end{matrix}
\\\begin{matrix}\frac{\partial x}{\partial ct}&\frac{\partial x}{\partial r}&\frac{\partial x}{\partial\phi}\end{matrix}
\\\begin{matrix}\frac{\partial y}{\partial ct}&\frac{\partial y}{\partial r}&\frac{\partial y}{\partial\phi}\end{matrix}
\end{pmatrix}\begin{pmatrix}d(ct)\\dr\\d\phi\end{pmatrix}$$
$$\begin{pmatrix}d(ct)\\dx\\dy\end{pmatrix}=
\begin{pmatrix}
\begin{pmatrix}1&0&0\end{pmatrix}
\\\begin{pmatrix}0&\cos\phi&-r\sin\phi\end{pmatrix}
\\\begin{pmatrix}0&\sin\phi&r\cos\phi\end{pmatrix}
\end{pmatrix}
\begin{pmatrix}d(ct)\\dr\\d\phi\end{pmatrix}$$
The units where $ls$ is a time multiplied by the speed of light, $l$ is length, and $a$ is angle in radians is as follows
$$\begin{pmatrix}ls\\l\\l\end{pmatrix}=\begin{pmatrix}ls/ls&ls/l&ls/a\\l/ls&l/l&l/a\\l/ls&l/l&l/a\end{pmatrix}\begin{pmatrix}ls\\l\\a\end{pmatrix}$$

The transpose is
$$\begin{pmatrix}d(ct)&dx&dy\end{pmatrix}=\begin{pmatrix}d(ct)&dr&d\phi\end{pmatrix}\begin{pmatrix}
\begin{pmatrix}1\\0\\0\end{pmatrix}&\begin{pmatrix}0\\\cos\phi\\-r\sin\phi\end{pmatrix}
&\begin{pmatrix}0\\\sin\phi\\r\cos\phi\end{pmatrix}
\end{pmatrix}$$
And the resulting metric is
$$\begin{pmatrix}
\begin{pmatrix}1\\0\\0\end{pmatrix}
&\begin{pmatrix}0\\\cos\phi\\-r\sin\phi\end{pmatrix}
&\begin{pmatrix}0\\\sin\phi\\r\cos\phi\end{pmatrix}
\end{pmatrix}
\begin{pmatrix}-1&0&0\\0&1&0\\0&0&1\end{pmatrix}
\begin{pmatrix}
\begin{pmatrix}1&0&0\end{pmatrix}
\\\begin{pmatrix}0&\cos\phi&-r\sin\phi\end{pmatrix}
\\\begin{pmatrix}0&\sin\phi&r\cos\phi\end{pmatrix}
\end{pmatrix}
$$
$$=\begin{pmatrix}
\begin{pmatrix}1\\0\\0\end{pmatrix}
&\begin{pmatrix}0\\\cos\phi\\-r\sin\phi\end{pmatrix}
&\begin{pmatrix}0\\\sin\phi\\r\cos\phi\end{pmatrix}
\end{pmatrix}
\begin{pmatrix}
\begin{pmatrix}-1&0&0\end{pmatrix}
\\\begin{pmatrix}0&\cos\phi&-r\sin\phi\end{pmatrix}
\\\begin{pmatrix}0&\sin\phi&r\cos\phi\end{pmatrix}
\end{pmatrix}
$$
To save ink, we may momentarily substitute $\gamma=\cos\phi$ and $\sigma=\sin\phi$, obtaining:

$$=\begin{pmatrix}-1&0&0
\\0&\gamma^2+\sigma^2&r\gamma\sigma-r\gamma\sigma
\\0&r\gamma\sigma-r\gamma\sigma&r^2(\sigma^2+\gamma^2)
\end{pmatrix}$$
Then using $\gamma^2+\sigma^2=\cos^2\phi+\sin^2\phi=1$
$$=\begin{pmatrix}-1&0&0\\0&1&0\\0&0&r^2\end{pmatrix}$$
Hence

$$-(cd\tau)^2=\begin{pmatrix}d(ct)&dr&d\phi\end{pmatrix}\begin{pmatrix}-1&0&0\\0&1&0\\0&0&r^2\end{pmatrix}\pmatrix{d(ct)\\dr\\d\phi}
$$
The metric as shown has inputs of varying units: $(ls, l, a)$; plotted time, length, and angle.  To get everything into the compatible units, we can change the angle term to an arc-length term like so:


$$-(cd\tau)^2=\begin{pmatrix}d(ct)&dr&rd\phi\end{pmatrix}\begin{pmatrix}-1&0&0\\0&1&0\\0&0&1\end{pmatrix}\pmatrix{d(ct)\\dr\\rd\phi}
$$
On the other hand, if we wish to embrace $(dt, dr, d\phi)$ as our input variables, with (seconds, meters, and radians) for units, the Minkowski polar metric tensor is 

$$-(cd\tau)^2=\begin{pmatrix}dt&dr&d\phi\end{pmatrix}\begin{pmatrix}-c^2&0&0\\0&1&0\\0&0&r^2\end{pmatrix}\begin{pmatrix}dt\\dr\\d\phi\end{pmatrix}$$


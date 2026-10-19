###  Goal:  Obtain a Metric Tensor for Head-Turning Coordinates

We imagine a rotating disk, with a rim at distance $R$.  A person stands at the center of the disk, letting himself turn.  Distant points on the disk appear stationary in his rotating [[point-of-View]] but actually have a relative velocity of $$\begin{matrix}v_\phi(r)&=r\omega\\&=r\frac{d\phi}{dt}\end{matrix}$$

We will begin by using [[Minkowski Polar Coordinates]]


$$-(cd\tau)^2=\begin{pmatrix}d(ct)&dr&d\phi\end{pmatrix}\begin{pmatrix}-1&0&0\\0&1&0\\0&0&r^2\end{pmatrix}\pmatrix{d(ct)\\dr\\d\phi}
$$
Our next objective is to apply another coordinate transformation from the stationary polar coordinates to a set of moving and accelerating points:  

Our "[[avatar]]" is turning counterclockwise with the disk whose angular velocity is $\omega$, so to obtain his [[point-of-view]] we imagine the world turning clockwise, so $$\overset{\text{avatar}}{\boxed{\phi'}}=\overset{\text{stationary}}{\boxed{\phi}}-\omega t$$

$$\phi=\phi'+\frac{\omega}{c} (ct)
\\r=r
\\ct=\frac{c(\phi-\phi')}{\omega}
$$
Compare to [[Spin Local Coordinates]]

$$d(ct,x,y)\downarrow=
\frac{\partial(ct,x,y)\downarrow}{\partial(ct,r,\phi)\rightarrow}\boxed{d(ct,r,\phi)\downarrow}$$

We can now obtain $$\boxed{d(ct,r,\phi)\downarrow}=\frac{\partial(ct,r,\phi)\downarrow}{(ct,r,\phi')\rightarrow}d(ct,r,\phi')\downarrow$$
$$=\begin{pmatrix}
\begin{matrix}\frac{\partial ct}{\partial ct}&\frac{\partial ct}{\partial r}&\frac{\partial ct}{\partial \phi'}\end{matrix}
\\\begin{matrix}\frac{\partial r}{\partial ct}&\frac{\partial r}{\partial r}&\frac{\partial r}{\partial \phi'}\end{matrix}
\\\begin{matrix}\frac{\partial \phi}{\partial ct}&\frac{\partial \phi}{\partial r}&\frac{\partial \phi}{\partial \phi'}\end{matrix}
\end{pmatrix}\begin{pmatrix}dct\\dr\\d\phi'\end{pmatrix}$$
$$=\begin{pmatrix}
\begin{pmatrix}1&0&-\frac{c}{\omega}\end{pmatrix}
\\\begin{pmatrix}0&1&0\end{pmatrix}
\\\begin{pmatrix}0&0&1\end{pmatrix}
\end{pmatrix}$$
We can sandwhich this and it's transpose around the [[Minkowski Polar Coordinates]] as

$$\begin{pmatrix}
\begin{pmatrix}1\\0\\-\frac{c}{\omega}\end{pmatrix}
&\begin{pmatrix}0\\1\\0\end{pmatrix}
&\begin{pmatrix}0\\0\\1\end{pmatrix}
\end{pmatrix}
\begin{pmatrix}-1&0&0\\0&1&0\\0&0&r^2\end{pmatrix}
\begin{pmatrix}
\begin{pmatrix}1&0&-\frac{c}{\omega}\end{pmatrix}
\\\begin{pmatrix}0&1&0\end{pmatrix}
\\\begin{pmatrix}0&0&1\end{pmatrix}
\end{pmatrix}$$
$$=\begin{pmatrix}
\begin{pmatrix}1\\0\\-\frac{c}{\omega}\end{pmatrix}
&\begin{pmatrix}0\\1\\0\end{pmatrix}
&\begin{pmatrix}0\\0\\1\end{pmatrix}
\end{pmatrix}\begin{pmatrix}-1&0&\frac{c}{\omega}
\\0&1&0
\\0&0&r^2\end{pmatrix}$$
$$=\begin{pmatrix}-1&0&\frac{c}{\omega}
\\0&1&0
\\\frac{c}{\omega}&0&r^2\left(1-\left(\frac{c}{r\omega}\right)\right)^2
\end{pmatrix}$$
$$-(cd\tau)^2=\begin{pmatrix}cdt&dr&d\phi'\end{pmatrix}\begin{pmatrix}-1&0&\frac{c}{\omega}
\\0&1&0
\\\frac{c}{\omega}&0&r^2\left(1-\left(\frac{c}{r\omega}\right)\right)^2
\end{pmatrix}\begin{pmatrix}cdt\\dr\\d\phi'\end{pmatrix}$$

Let's apply $\beta_\phi=\frac{r\omega}{c}$, and $\frac{c}{\omega}=\frac{r}{\beta_\phi}$ to simplify this expression

$$1-\frac{1}{\beta_\phi^2}=-\frac{-(1-\beta_\phi^2)}{\beta_\phi^2}=-\frac{1}{\beta_\phi^2\gamma_\phi^2}=-\frac{1}{\sigma_\phi^2}$$  
Here, $c\beta_\phi$ is the tangential velocity, and $\gamma_\phi$ is the associated Lorentz Factor
$$\gamma_\phi=\cosh(\operatorname{arctanh}(\beta_\phi))$$
$$\sigma_\phi=\sinh(\operatorname{arctanh}(\beta_\phi))$$
$$-(cd\tau)^2=\begin{pmatrix}cdt&dr&d\phi'\end{pmatrix}\begin{pmatrix}-1&0&\frac{c}{\omega}
\\0&1&0
\\\frac{c}{\omega}&0&-\frac{r^2}{\sigma_\phi^2}
\end{pmatrix}\begin{pmatrix}cdt\\dr\\d\phi'\end{pmatrix}$$
$$=\begin{pmatrix}cdt&dr&d\phi\end{pmatrix}\begin{pmatrix}-c dt+\frac{c^2d\phi'}{\omega}\\dr\\\frac{c^2dt}{\omega}-\frac{r^2d\phi'}{\beta_\phi^2\gamma_\phi^2}\end{pmatrix}$$
$$=cdt(-cdt\boxed{+}c^2d\phi/\omega)+dr(dr)+d\phi(c^2dt/\omega-r^2d\phi/\sigma_\phi^2)$$
$$=-c^2dt^2\boxed+\frac{c}{\omega}d\phi' d(ct)+\frac{c}{\omega}d\phi' d(ct)-\frac{r^2}{\beta_\phi\gamma_\phi^2}d\phi'^2+dr^2$$
$$=-(cdt)^2-\left(\frac{rd\phi'}{\gamma_\phi\beta_\phi}\right)^2+\frac{2cd\phi' d(ct)}{\omega}+dr^2$$

$$=-(cdt)^2-\left(\frac{rd\phi'}{\beta_\phi\gamma_\phi}\right)^2+\frac{2(rd\phi') d(ct)}{(r\omega/c)}+dr^2$$
$$=-(cdt)^2-\left(\frac{rd\phi'}{\beta_\phi\gamma_\phi}\right)^2+\frac{2(rd\phi') d(ct)}{\beta_\phi}+dr^2$$
Let's allow for a an ant crawling on the distant rim at $c \beta_2 dt=rd\phi'$.  This obtains:

$$=-(cdt)^2-\left(\frac{\beta_2}{\beta_\phi\gamma_\phi}\right)^2(cdt)^2+2(\frac{\beta_2}{\beta_\phi})(c dt)^2+dr^2$$
$$=-(cdt)^2\left[\left(\frac{\beta_2}{\gamma_\phi\beta_\phi}\right)^2+2\frac{\beta_2}{\beta_\phi}\right]-(cdt)^2+dr^2$$
$$=-(cdt)^2\left[\frac{\beta_2}{\beta_\phi}\left(\frac{1}{\gamma_\phi^2}+2\right)+1\right]+dr^2$$

The division by zero problem that occurs when $\beta_\phi=0$ is problematic.  We should be looking for a result that reduces to $-(cd\tau)^2=-(cdt)^2+(rd\phi')^2$ when the [[rapidity]] is zero.  
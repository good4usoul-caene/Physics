### Head Turning Reference

From [[Head Turning Coordinates]] we have

$$\phi=\phi'+\frac{\omega}{c} (ct)
\\r=r
\\ct=\frac{c(\phi-\phi')}{\omega}
$$

### Head Turning Coordinates, Continued

I wish to see whether we can establish a locally applicable Lorentz Transformation for these coordinates.

$$r\phi=r\phi'+\frac{r\omega}{c} (ct)
\\r=r
\\ct=\frac{(r\phi-r\phi')}{r\omega/c}
$$

### Local Experienced Coordinates

The Lorentz Transformations

$$\boxed{x}=\boxed{x'}\cosh\eta+ct'\sinh\eta
\\t=t'\cosh\eta+\boxed{\frac{x'}{c}}\sinh\eta$$

### LT in Polar Coordinates (Tangentnial)

Are modified to have path elements:
$$r\phi=r\phi''\gamma_\phi+ct'\sigma_\phi
\\(\phi=\phi''\gamma_\phi+ct'\sigma_\phi)
\\t=t'\gamma_\phi+\frac{r\phi''}{c}\sigma_\phi
\\r=r$$


Using $\phi''$ since we already used $\phi'$ in [[Head Turning Coordinates]]

### Jacobian

The [[Jacobian]] is:

$$d(\text{known})\downarrow=\frac{\partial(\text{known})\downarrow}{\partial\text{(new)}\rightarrow}d(\text{new})\downarrow
\\d(ct,r,\phi)\downarrow=\frac{\partial(ct,r,\phi)\downarrow}{\partial(ct',r,\phi'')\rightarrow}d(ct',r,\phi'')\downarrow$$
$$=\begin{pmatrix}
\begin{pmatrix}\frac{\partial ct}{\partial ct'}&\frac{\partial ct}{\partial r}&\frac{\partial ct}{\partial \phi''}\end{pmatrix}
\\\begin{pmatrix}\frac{\partial r}{\partial ct'}&\frac{\partial r}{\partial r}&\frac{\partial r}{\partial \phi''}\end{pmatrix}
\\\begin{pmatrix}\frac{\partial \phi}{\partial ct'}&\frac{\partial \phi}{\partial r}&\frac{\partial \phi}{\partial \phi''}\end{pmatrix}
\end{pmatrix}$$
$$
t=t'\gamma_\phi+\frac{r\phi''\sigma_\phi}{c}
\\\frac{\partial t}{\partial t'}=\overset{1}{\boxed{\gamma_\phi}} ,\frac{\partial t}{\partial r}=\boxed{0},\frac{\partial t}{\partial \phi''}=\overset{3}{\boxed{\frac{r\sigma_\phi}{c}}}
\\ r=r
\\\frac{\partial r}{\partial t'}=\boxed{0} ,\frac{\partial r}{\partial r}=\boxed{1},\frac{\partial r}{\partial \phi''}=\boxed{0}
\\\phi=\phi''\gamma_\phi+\frac{ct'\sigma_\phi}{r}
\\\frac{\partial \phi}{\partial t'}=\overset{7}{\boxed{\frac{c\sigma_\phi}{r}} },\frac{\partial \phi}{\partial r}=\boxed{0},\frac{\partial \phi}{\partial \phi''}=\overset{9}{\boxed{\gamma_\phi}}
$$
### Divide ct'/r to fix this!

We can sandwich the resulting matrix around [[Minkowski Polar Coordinates]]

$$=\begin{pmatrix}
\begin{pmatrix}\overset{1}{\gamma_\phi}\\0\\\overset{3}{\frac{r\sigma_\phi}{c}}\end{pmatrix}
&\begin{pmatrix}0\\1\\0\end{pmatrix}
&\begin{pmatrix}\overset{7}{\frac{c\sigma_\phi}{r}}\\0\\\overset{9}{\gamma_\phi}\end{pmatrix}
\end{pmatrix}
\begin{pmatrix}-c^2&0&0\\0&1&0\\0&0&r^2\end{pmatrix}
\begin{pmatrix}
\begin{pmatrix}\overset{1}{\gamma_\phi}&0&\overset{3}{\frac{r\sigma_\phi}{c}}\end{pmatrix}
\\\begin{pmatrix}0&1&0\end{pmatrix}
\\\begin{pmatrix}\overset{7}{\frac{c\sigma_\phi}{r}}&0&\overset{9}{\gamma_\phi}\end{pmatrix}
\end{pmatrix}$$
The $r^2$ term converts acts as a column operator to the left matrix and a row operator to the right matrix.
$$=\begin{pmatrix}
\begin{pmatrix}\overset{1}{c\gamma_\phi}\\0\\\overset{3}{r\sigma_\phi\frac{c}{c}}\end{pmatrix}
&\begin{pmatrix}0\\1\\0\end{pmatrix}
&\begin{pmatrix}\overset{7}{c\sigma_\phi\frac{r}{r}}\\0\\\overset{9}{r\gamma_\phi}\end{pmatrix}
\end{pmatrix}
\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}
\begin{pmatrix}
\begin{pmatrix}\overset{1}{-c\gamma_\phi}&0&\overset{3}{-r\sigma_\phi\frac{c}{c}}\end{pmatrix}
\\\begin{pmatrix}0&1&0\end{pmatrix}
\\\begin{pmatrix}\overset{7}{c\sigma_\phi\frac{r}{r}}&0&\overset{9}{r\gamma_\phi}\end{pmatrix}
\end{pmatrix}$$

### Multiplying the things

$$-(cd\tau)^2=\begin{pmatrix}dt'&dr&d\phi''\end{pmatrix}
\begin{pmatrix}\overset{11+77}{c^2(-\gamma_\phi^2+\sigma^2)}&0&\overset{13+79}{(1-1)rc\sigma_\phi\gamma_\phi}\\0&1&0\\\overset{31+97}{(1-1)rc\sigma_\phi\gamma_\phi}&0&\overset{33+99}{-r^2(\gamma_\phi^2-\sigma\phi^2)}\end{pmatrix}
\begin{pmatrix}dt'\\dr\\d\phi''\end{pmatrix}$$

$$-(cd\tau)^2=\begin{pmatrix}dt'&dr&d\phi''\end{pmatrix}
\begin{pmatrix}\overset{}{-c^2}&0&\overset{}{0}\\0&1&0\\\overset{}{0}&0&\overset{}{r^2}\end{pmatrix}
\begin{pmatrix}dt'\\dr\\d\phi''\end{pmatrix}$$



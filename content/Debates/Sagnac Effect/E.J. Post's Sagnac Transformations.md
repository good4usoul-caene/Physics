In *Sagnac Effect*, (Review of Modern Physics, April 1967) by E. J. Post, he gives equations (11) and (24) that seem to be attempts to model clocks moving around in a circle.  On this page, I will analyze these, and compare them to other transformations, such as the [[Galilean Transformation]], [[Lorentz Transformations]], and [[Tangherlini Transformations]] 

# Equation 11
$$
dt=\gamma dt'
\\dr=dr'
\\d\phi=d\phi'+\gamma\omega dt'
$$
The third equation can be converted from an equation for angles to an equation for arc-length by multiplying it by $r$. 

$$
\\rd\phi=rd\phi'+r\omega dt'
\\ds=ds'+\gamma v_sdt'
$$

In matrix form, the equation becomes 

$$
\begin{pmatrix}dt\\dr\\ds\end{pmatrix}=
\begin{pmatrix}\gamma&0&0\\0&1&0\\\gamma v_s&0&1\end{pmatrix}
\begin{pmatrix}dt'\\dr'\\ds'\end{pmatrix}
$$

If we imagine a circle in the family of circles ([Family of Rotating Rims | Desmos](https://www.desmos.com/3d/cnno6gfzfk)), running tangent to a conveyor belt with $v_x=v_s$, the transformation (at that point) becomes:

$$
\begin{pmatrix}dt\\dr\\dx\end{pmatrix}=
\begin{pmatrix}\gamma&0&0\\0&1&0\\\gamma v_x&0&1\end{pmatrix}
\begin{pmatrix}dt'\\{\boxed{0}}\\dx'\end{pmatrix}
$$
And this transformation can be extended globally over the tangential conveyor belt as:

$$
\begin{pmatrix}\Delta t\\\Delta r\\\Delta x\end{pmatrix}=
\begin{pmatrix}\gamma&0&0\\0&1&0\\\gamma v_x&0&1\end{pmatrix}
\begin{pmatrix}\Delta t'\\{\boxed{\frac{v_x}{\omega_{\perp}}}}\\\Delta x'\end{pmatrix}
$$

Our angular velocity, $\omega_{\perp}=\omega_{rim}$, here has a new description.  Rather than being the angular velocity of the rim, it is now "How fast you need to turn your head" to watch a point on the conveyor belt as it passes perpendicular to your line of sight.

We could further globally extend the equation to a fully global coordinate system.

$$
\begin{pmatrix}\Delta t\\\Delta x\\\Delta y\\\Delta z\end{pmatrix}=
\begin{pmatrix}\gamma&0&0&0\\\gamma v_x&1&0&0\\0&0&1&0\\0&0&0&1\end{pmatrix}
\begin{pmatrix}\Delta t'\\\Delta x'\\\Delta y'\\\Delta z'\end{pmatrix}
$$

This would expand the conveyor belt frame from 1-dimension to three-dimensions.  But for now, we want to focus on the $x$ and $t$ dimensions.


$$
\begin{pmatrix}\Delta t\\\Delta x\\\end{pmatrix}=
\begin{pmatrix}\gamma&0\\\gamma v_x&1\end{pmatrix}
\begin{pmatrix}\Delta t'\\\Delta x'\end{pmatrix}
$$

The [[Inverse of a 2x2 matrix]]

$$
\begin{pmatrix}\gamma&0\\\gamma v&1\end{pmatrix}^{-1}=\frac{\begin{pmatrix}1&0\\-\gamma v&\gamma\end{pmatrix}}{\gamma(1)-0\gamma v}
\\=\frac{\begin{pmatrix}1&0\\-\gamma v&\gamma\end{pmatrix}}{\gamma}
\\\begin{pmatrix}\Delta t'\\\Delta x'\end{pmatrix}=
\begin{pmatrix}\frac{1}{\gamma}&0\\-v&1\end{pmatrix}\begin{pmatrix}\Delta t\\\Delta x\end{pmatrix}
$$

This is essentially a Galilean Transformation with slowed clocks (the "preferred frame" has the fastest clocks.)

# Equations 18-19
E. J. Post mentions that Langevin took $\gamma=1$ making the above equation:

$$
\begin{pmatrix}\Delta t'\\\Delta x'\end{pmatrix}=
\begin{pmatrix}1&0\\-v&1\end{pmatrix}\begin{pmatrix}\Delta t\\\Delta x\end{pmatrix}
$$
Removing $\gamma$ from the expression may or may not remove a "preferred frame".  See [[The Two Galilean Premises]]


# Equation 24

$$
dt=\frac{dt'}{\sqrt{1-(\frac{\omega R}{c})^2}}
\\dr=dr'
\\d\phi=d\phi'+\frac{\omega dt'}{\sqrt{1-(\frac{\omega R}{c})^2}}
$$

Replacing $\beta=\frac{\omega R}{c}$ and $\gamma=\frac{1}{\sqrt{1-\beta^2}}$ this turns out to be exactly the same transformation as equation 11.


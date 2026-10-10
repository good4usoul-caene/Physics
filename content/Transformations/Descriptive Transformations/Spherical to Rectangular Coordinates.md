
[Spherical Coordinates | Desmos](https://www.desmos.com/3d/ehjgcebkos)

For this representation we will measure the azimuthal angle $\theta$ as the angle from the equator
The polar angle $\phi$ will be an angle from a prime meridian.
And the radius, $r$, is the distance from the center.

The [[Descriptive and Perspectival Transformations|Descriptive]] transformation from these coordinates to rectangular coordinates is:

$$z=r\cos\theta;\qquad \theta\in[0,\pi], r\in[0,\infty)$$
$$x=r\sin\theta \cos\phi;\qquad\phi\in[0,2\pi]$$
$$y=r\sin\theta\sin\phi$$

The ==Total Derivative== of each of these definitions can be obtained all at once using a [[Jacobians & Coordinate Transformations|Jacobian]] 

$$d(x,y,z)\downarrow=\frac{(x,y,z)\downarrow}{(r,\theta,\phi)\rightarrow}d(r,\theta,\phi)\downarrow$$
$$\begin{pmatrix}dx\\dy\\dz\end{pmatrix}=\frac{\partial(r\sin\theta\cos\phi,r\sin\theta\sin\phi,r\cos\theta)\downarrow}
{\partial(r,\theta,\phi)\rightarrow}\begin{pmatrix}dr\\d\theta\\d\phi\end{pmatrix}$$

$$\begin{pmatrix}dx\\dy\\dz\end{pmatrix}=\begin{pmatrix}
\begin{matrix}\frac{\partial(r \sin \theta \cos \phi)}{\partial r}&\frac{\partial(r\sin\theta\sin\phi)}{\partial \theta}&\frac{\partial(r\cos\theta)}{\partial \phi}\end{matrix}
\\\begin{matrix}\frac{\partial(r \sin \theta \cos \phi)}{\partial r}&\frac{\partial(r\sin\theta\sin\phi)}{\partial \theta}&\frac{\partial(r\cos\theta)}{\partial \phi}\end{matrix}
\\\begin{matrix}\frac{\partial(r \sin \theta \cos \phi)}{\partial r}&\frac{\partial(r\sin\theta\sin\phi)}{\partial \theta}&\frac{\partial(r\cos\theta)}{\partial \phi}\end{matrix}
\end{pmatrix}\pmatrix{dr\\d\theta\\d\phi}$$


$$\begin{pmatrix}dx\\dy\\dz\end{pmatrix}=\begin{pmatrix}\sin\theta\cos\phi&r\cos\theta\cos\phi&-r\sin\theta\sin\phi
\\\sin\theta\sin\phi&r\cos\theta\sin\phi&r\sin\theta\cos\phi
\\\cos\theta&-r\sin\theta&0\end{pmatrix}\begin{pmatrix}dr\\d\theta\\d\phi\end{pmatrix}$$

This leads to the three total derivatives:
$$dx=\sin\theta\cos\phi dr + rd\theta \cos\theta \sin \phi -rd\phi \sin\theta\sin\phi$$
$$dy=dr \sin\theta\sin\phi +rd\theta \cos\theta\sin\phi + rd\phi \sin\theta\cos\phi$$
$$dz=dr\cos\theta-rd\theta \sin\theta$$
This could be useful in itself, but what does the ==Pythagorean Theorem== say about the path length of the differential element composed of length $dr$ in the purely radial direction, length $rd\theta$, in the purely azimuthal direction and length $rd\phi$ in the purely polar direction?  

##### Naive Conjecture

Naively, we might apply the 3D-Pythagorean theorem directly to these very slightly curved paths, and it probably wouldn't be too far off to expect a result (Using $h$ for "hypotenuse") of $dh^2\approx dr^2+(rd\theta)^2+(rd\phi)^2$.  

#### Exact Calculation

However, since $rd\theta$ and $rd\phi$ are slightly curved, let's assume the exact answer is $dh^2=dx^2+dy^2+dz^2$ .  But so that all that work of finding the total derivative won't go to waste, we'll take the following approach:

$$dh^2=dx^2+dy^2+dz^2$$
$$=\overset\rightarrow {d(x,y,z)} (I) d(x,y,z)\downarrow$$

$$=\overset\rightarrow {d(r,\theta,\phi)}\frac{(x,y,z)\rightarrow}{(r,\theta,\phi)\downarrow}(I)\frac{(x,y,z)\downarrow}{(r,\theta,\phi)\rightarrow} d(r,\theta,\phi)\downarrow$$


\\&
\\&=\Pmatrix{dr&d\theta&d\phi}\JThreeT{x}{y}{z}{r}{\theta}{\phi}\Pmatrix{1&0&0\\0&1&0\\0&0&1}\JThree{x}{y}{z}{r}{\theta}{\phi}\Pmatrix{dr\\d\theta\\d\phi}
$$
For this problem the introduction of the identity matrix $$I=\Pmatrix{1&0&0\\0&1&0\\0&0&1}$$ sandwiched between the matrix inner product $dh^2=\Pmatrix{dx&dy&dz}\Pmatrix{dx\\dy\\dz}$ feels extraneous.  However, we will come to refer to this as the [[Cartesian Metric Tensor]] as a contrast to the [[Minkowski Metric]] Tensor

$$\ThreeThreeT{\sin\theta\cos\phi}
{r\cos\theta\cos\phi}
{-r\sin\theta\sin\phi}
{\sin\theta\sin\phi}
{r\cos\theta\sin\phi}
{r\sin\theta\cos\phi}
{\cos\theta}
{-r\sin\theta}{0}I\ThreeThree{\sin\theta\cos\phi}{r\cos\theta\cos\phi}{-r\sin\theta\sin\phi}{\sin\theta\sin\phi}{r\cos\theta\sin\phi}{r\sin\theta\cos\phi
}{\cos\theta}{-r\sin\theta}{0}$$
Where $I$ is the [[Cartesian Metric Tensor]] Working out all nine terms at once would take too much space.  Let's work out the product column by column.
>[!info]- First Colum:
>
>$$\Pmatrix{\sin^2\theta\cos^2\phi+\sin^2\theta\sin^2\phi+\cos^2\theta\\r\cos\theta\sin\theta\cos^2\phi+r\cos\theta\sin\theta\sin^2\phi-r\sin\theta\cos\theta\\-r\sin^2\theta\sin\phi\cos\phi+r\sin^2\theta\cos\phi\sin\phi}=\Pmatrix{\sin^2\theta(\cos^2\phi+\sin^2\phi)+\cos^2\theta\\r\cos\theta\sin\theta(\cos^2\phi+\sin^2\phi-r\sin\theta\cos\theta\\0}=\Pmatrix{1\\0\\0}$$

>[!info]- Second Column
>
>$$\Pmatrix{(\sin\theta \cos\phi)( r\cos\theta\cos\phi)+(\sin\theta\sin\phi)(r\cos\theta\sin\phi)+(\cos\theta)(-r\sin\theta)\\( r\cos\theta\cos\phi)^2+(r\cos\theta\sin\phi)^2+(-r\sin\theta)^2\\(-r\sin\theta\sin\phi)( r\cos\theta\cos\phi)+(r\sin\theta\cos\phi)(r\cos\theta\sin\phi)+(0)(-r\sin\theta)}$$
>
>$$\Pmatrix{r\sin\theta\cos\theta(\cos^2\phi+\sin^2\phi)-r\cos\theta\sin\theta
\\r^2\cos^2\theta(\cos^2\phi+\sin^2\phi)+r^2\sin^2\theta
\\-r\sin\theta\cos\theta\sin\phi\cos\phi+r\sin\theta\cos\theta\sin\phi\cos\phi
}=\Pmatrix{0\\r^2\\0}$$

>[!info]- Last Column
>
>$$\Pmatrix{(\sin\theta \cos\phi)(-r\sin\theta\sin\phi )+(\sin\theta\sin\phi)(r\sin\theta\cos\phi)+(\cos\theta)(0)\\( r\cos\theta\cos\phi)(-r\sin\theta\sin\phi)
+(r\cos\theta\sin\phi)(r\sin\theta\cos\phi)+(-r\sin\theta)(0)\\(-r\sin\theta\sin\phi)^2+(r\sin\theta\cos\phi)^2+(0)^2}$$
>$$\Pmatrix{-r\sin^2\theta\sin\phi\cos\phi+r\sin^2\theta\sin\phi\cos\phi
\\-r^2\cos\theta\sin\theta\cos\phi\sin\phi+r^2\cos\theta\sin\theta\cos\phi\sin\phi
\\r^2\sin^2\theta(\sin^2\phi+\cos^2\phi)}=\Pmatrix{0\\0\\r^2\sin^2\theta}$$

The product, or [[Spherical Metric Tensor]] comes to:

$$\Pmatrix{1&0&0\\0&r^2&0\\0&0&(r\sin\theta)^2}$$
Which has a use as

$$dh^2=\Pmatrix{dr&d\theta&d\phi}\Pmatrix{1&0&0\\0&r^2&0\\0&0&(r\sin\theta)^2}\Pmatrix{dr\\d\theta\\d\phi}$$
So, how does that square with our ==Naive Conjecture== above?  Our conjecture was 
$$dh^2\approx dr^2+(r d\theta^2)+(r d\phi^2)^2$$
The actual result is $$dh^2=dr^2+(rd\theta)^2+(r\sin\theta d\phi)^2$$
Our naive conjecture was correct for the radial direction, and for the azimuthal direction.  However, it was incorrect with regards to the polar direction, because the circles of latitude become smaller and smaller as one moves toward the poles.

We could leave the metric tensor as is, or we could re-write it in such a way as it moves the "corrective coefficients" out of the matrix, and into the differential path elements, themselves:

$$dh^2=\Pmatrix{dr&r d\theta&r \sin \theta d\phi}\Pmatrix{1&0&0\\0&1&0\\0&0&1}\Pmatrix{dr\\r d\theta\\r\sin\theta d\phi}$$

[[Descriptive and Perspectival Transformations]]
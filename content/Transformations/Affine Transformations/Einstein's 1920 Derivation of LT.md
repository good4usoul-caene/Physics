In [(PDF) Two Proofs of Lorentz Transformations](https://www.researchgate.net/publication/412197614_Two_Proofs_of_Lorentz_Transformations) Section 2, I discussed Einstein's *Appendix 1* from his 1920 book, "Relativity: The Spcial & the General Theory" available at [The Project Gutenberg eBook of Relativity: The Special and General Theory, by Albert Einstein](https://www.gutenberg.org/cache/epub/5001/pg5001-images.html#app1)

This page is intended to reproduce the same derivation as that in the 1920 Appendix 1, but I go into some additional detail. 
### light rays are eigenvectors
- We can denote rays of light emanating from the origin at time=0 with the equations $x=ct$ for the right-bound ray, and $x=-ct$ for the left-bound ray.
- Parametric expressions for these rays are $$\begin{pmatrix}x_L(t)\\t_L(t)\end{pmatrix}=\begin{pmatrix}-ct\\t\end{pmatrix}\text{ and }\begin{pmatrix}x_R(t)\\t_R(t)\end{pmatrix}=\begin{pmatrix}ct\\t\end{pmatrix}$$
- The parametric equations as given imply that the rays simply go forever.  However, we're interested in imagining situations where the rays may actually it something.  Let's denote these "hitting events"  with the lower-case subscripts:  $$x_l=-ct_l$$ and $$x_r=ct_r$$ or as vectors: $$\begin{pmatrix}x_l\\t_l\end{pmatrix}=\begin{pmatrix}-ct_l\\t_l\end{pmatrix}\\\begin{pmatrix}x_r\\t_r\end{pmatrix}=\begin{pmatrix}ct_r\\t_r\end{pmatrix}$$
### How do we assure the speed of light is maintained?
  - We want a transformation of the coordinates $$(x_l,t_l)\rightarrow(x_l',t_l')\\(x_r,t_r)\rightarrow(x_r',t_r')$$REQUIRED:  We DO require that these ratios hold: $$\frac{x_r'}{t_r'}=\frac{x_r}{t_r}=c\\\frac{x_l'}{t_l'}=\frac{x_l}{t_l}=-c$$The SLOPE (ratio, velocity) has to be the same before and after the mapping, but the actual vectors may stretch or contract. $$(x_r',t_r')=\mu(x_r,t_r)\\(x_l',t_l')=\lambda(x_r,t_r)$$
### The Two Parts:

We can break the transformation into a $\mu$ part (that stretches the right interval), and a $\lambda$ part (that stretches the left interval.)

The $\mu$-part needs to stretch the ray to the right, while it eliminates the ray to the left.  This will prevent the $\mu$-part from interfering with the $\lambda$-part

$$M_\mu\begin{pmatrix}x\\t\end{pmatrix}:\begin{pmatrix}ct_r\\t_r\end{pmatrix}\rightarrow\mu\begin{pmatrix}ct_r\\t_r\end{pmatrix}$$

$$M_\mu\begin{pmatrix}x\\t\end{pmatrix}:\begin{pmatrix}-ct_l\\t_l\end{pmatrix}\rightarrow\begin{pmatrix}0\\0\end{pmatrix}$$

Likewise, the $\lambda$-part needs to stretch the ray to the left, while it eliminates the ray to the right:

$$M_\lambda\begin{pmatrix}x\\t\end{pmatrix}:\begin{pmatrix}-ct_r\\t_r\end{pmatrix}\rightarrow\lambda\begin{pmatrix}ct_r\\t_r\end{pmatrix}$$


$$M_\lambda\begin{pmatrix}x\\t\end{pmatrix}:\begin{pmatrix}ct_r\\t_r\end{pmatrix}\rightarrow\begin{pmatrix}0\\0\end{pmatrix}$$


# The Solution

We will check whether these matrices do the trick

$$M_\mu=\begin{pmatrix}\frac{\mu}{2}&\frac{c\mu}{2}\\\frac{\mu}{2c}&\frac{\mu}{2}\end{pmatrix}$$

$$M_\lambda=\begin{pmatrix}\frac{\lambda}{2}&-\frac{c\lambda}{2}\\-\frac{\lambda}{2c}&\frac{\lambda}{2}\end{pmatrix}$$

# Checking the Solutions

$$M_\mu\begin{pmatrix}\vec{c_r}&\vec{c_l}\end{pmatrix}=\begin{pmatrix}\frac{\mu}{2}&\frac{c\mu}{2}\\\frac{\mu}{2c}&\frac{\mu}{2}\end{pmatrix}\begin{pmatrix}\begin{pmatrix}ct_r\\t_r\end{pmatrix}&\begin{pmatrix}-ct_l\\t_l\end{pmatrix}\end{pmatrix}$$

$$\begin{pmatrix}\begin{pmatrix}\mu ct_r\\\mu t_r\end{pmatrix}&\begin{pmatrix}0\\0\end{pmatrix}\end{pmatrix}$$

$$M_\mu\begin{pmatrix}\vec{c_r}&\vec{c_l}\end{pmatrix}=\begin{pmatrix}\vec{\mu c_r}&\vec{0}\end{pmatrix}$$

 Applying the $\mu$ matrix stretches the ray to the right, while it eliminates the ray to the left. 
 
$$M_\lambda\begin{pmatrix}\vec{c_r}&\vec{c_l}\end{pmatrix}=\begin{pmatrix}\frac{\lambda}{2}&-\frac{c\lambda}{2}\\-\frac{\lambda}{2c}&\frac{\lambda}{2}\end{pmatrix}\begin{pmatrix}\begin{pmatrix}ct_r\\t_r\end{pmatrix}&\begin{pmatrix}-ct_l\\t_l\end{pmatrix}\end{pmatrix}$$ 

$$=\begin{pmatrix}\begin{pmatrix}0\\0\end{pmatrix}&\begin{pmatrix}-\lambda ct_l\\\lambda t_l\end{pmatrix}\end{pmatrix}$$ 
$$M_\mu\begin{pmatrix}\vec{c_r}&\vec{c_l}\end{pmatrix}=\begin{pmatrix}\vec{0}&\vec{\lambda c_l}\end{pmatrix}$$
 
 Applying the $\lambda$ matrix stretches the ray to the left while it eliminates the ray to the right.

### The Bold Claim

The two matrices we have picked out work for very special cases.  Namely they only work on intervals from emission events, $(0,0)$ to light-reception events $(x_l,t_l)$ or $(x_r,t_r)$.  There are a couple of problems: such as it is, $M_\lambda$ only makes serious predictions about light rays going directly to the left, and $M_\mu$ only makes serious predictions about light rays going to the right.  However, if we add the two matrices together, we get a transformation equation that works for both rays, and perhaps in doing so, it will handle every event in the $(x,t)$ plane.

$$M_\lambda+M_\mu=\begin{pmatrix}\frac{\mu+\lambda}{2}&\frac{c(\mu-\lambda)}{2}\\\frac{\mu-\lambda}{2c}&\frac{\mu+\lambda}{2}\end{pmatrix}$$

### Assure that $(x,t)=(vt,t)$ is mapped to $(x',t')=(0,t')$

The next issue that needs to be handled is to obtain a basic result that must be shared by all [[boost]] transformations.  Namely, we would like that if our [[avatar]] accelerates to the right by velocity $v$, then all points in our space that move with velocity $v$ ought to appear stationary in his own [[Point-of-View]].  

Our parametric equation for our avatar's position is:

$$\begin{pmatrix}x\\t\end{pmatrix}=\begin{pmatrix}vt\\t\end{pmatrix}=\begin{pmatrix}\beta ct\\t\end{pmatrix}=\begin{pmatrix}ct\tanh\eta\\t\end{pmatrix}$$

Here, we invoke the definition 
$$\beta(v)\equiv v/c=\tanh\eta\\\eta(v)\equiv\operatorname{arctanh(v/c})$$

Our requirement is that 

$$ \begin{pmatrix}0\\t' \end{pmatrix}= \begin{pmatrix}x'\\t'\end{pmatrix}=\begin{pmatrix}\frac{\mu+\lambda}{2}& \frac{c(\mu-\lambda)}2{}\\ \frac{\mu-\lambda}{2c}&\frac{\mu+\lambda}{2} \end{pmatrix} \begin{pmatrix}ct\tanh \eta\\t\end{pmatrix}$$

$$\begin{pmatrix}0\\t'\end{pmatrix}=\begin{pmatrix}ct \left(\tanh\eta\frac{\mu+\lambda}{2} +\frac{\mu\boxed{-}\lambda}{2}\right) \\t\left(\tanh\eta\frac{\mu{\boxed-}\lambda}{2}+\frac{\mu+\lambda}{2}\right)\end{pmatrix}$$

$$\begin{pmatrix}0\\\frac{t'}{t}\end{pmatrix}=\begin{pmatrix}\frac{\mu\tanh\eta+\mu+\lambda\tanh\eta\boxed{-}\lambda}{2}\\\frac{\mu\tanh\eta+\mu\boxed{-}\lambda\tanh\eta+\lambda}{2}\end{pmatrix}$$

$$\begin{pmatrix}0\\\frac{2t'}{t}\end{pmatrix}=\begin{pmatrix}\mu\sinh\eta+\mu\cosh\eta+\lambda\sinh\eta\boxed{-}\lambda\cosh\eta\\\mu\sinh\eta+\mu\cosh\eta\boxed{-}\lambda\sinh\eta+\lambda\cosh\eta\end{pmatrix}$$ 

$$\begin{pmatrix}0\\\frac{2t'}{t}\end{pmatrix}= \begin{pmatrix} \mu\sigma+\mu\gamma +\lambda\sigma -\lambda\gamma \\ \mu\sigma+\mu\gamma - \lambda\sigma +\lambda\gamma \end{pmatrix}$$



$$\begin{pmatrix}0\\ \frac{2t'}{t} \end{pmatrix} =\begin{pmatrix}\mu(\sigma+\gamma)+\lambda (\sigma\boxed{-}\gamma) \\\mu(\gamma+\sigma) +\lambda(\gamma-\sigma) \end{pmatrix}$$

 



$$\\\begin{pmatrix} \lambda (\gamma-\sigma) \\ 2t'/t \end{pmatrix} =\begin{pmatrix} \mu (\gamma+\sigma) \\ \mu (2\exp(\eta)) + \lambda(2\exp(-\eta)) \end{pmatrix}$$



$$\begin{pmatrix}\frac{\gamma-\sigma}{\gamma+\sigma}=\frac{\exp(-\eta)}{\exp(\eta)}\\\frac{t'}{t}\end{pmatrix}=\begin{pmatrix}\frac{\mu}{\lambda}=\exp(-2\eta)\\\mu e^{\eta}+\lambda e^{-\eta}=2\lambda e^{-\eta}\end{pmatrix}$$

# Another requirement

We also want it so that the application $$M_\mu+M_\lambda$$ should not result in the space or time growing or shrinking.  For this we require that the determinant equals 1.  

$$\det(M_\lambda+M_\mu)=\left|\begin{pmatrix}\frac{\mu+\lambda}{2}&\frac{c(\mu-\lambda)}2{}\\\frac{\mu-\lambda}{2c}&\frac{\mu+\lambda}{2}\end{pmatrix}\right|=1$$ 

$$1=\frac{\mu+\lambda}{2}\frac{\mu+\lambda}{2}-\frac{\mu-\lambda}{2c}\frac{c(\mu-\lambda)}{2}$$

$$=\frac{\mu^2+2\lambda\mu+\lambda^2}{4}-\frac{\mu^2-2\mu\lambda+\lambda^2}{4}$$ 

$$=\frac{4\lambda\mu}{4}$$

Taking $$\boxed{\frac{\lambda}{\mu}=e^{-2\eta}} \rightarrow\boxed{\lambda=\mu e^{-2\eta}}$$

we have $$1=\lambda\mu=\mu^2 e^{-2\eta}$$ $$\mu^2=e^{2\eta}$$ $$\mu=e^\eta$$
$$\lambda=\frac{1}{\mu}=e^{-\eta}$$

### Final Result:  The Lorentz Transformation in various forms.

$$L=M_\lambda+M_\mu=\begin{pmatrix}\frac{\mu+\lambda}{2}&\frac{c(\mu-\lambda)}2{}\\\frac{\mu-\lambda}{2c}&\frac{\mu+\lambda}{2}\end{pmatrix}$$

$$=\begin{pmatrix}\frac{e^\eta+e^{-\eta}}{2}&\frac{c(e^\eta-e^{-\eta})}{2}\\\frac{e^\eta-e^{-\eta}}{2c}&\frac{e^\eta+e^{-\eta}}{2}\end{pmatrix}$$

$$=\begin{pmatrix}\cosh\eta&c\sinh\eta\\\frac{\sinh\eta}{c}&\cosh\eta\end{pmatrix}$$

$$=\begin{pmatrix}\gamma&c\beta\gamma\\\frac{\beta\gamma}{c}&\gamma\end{pmatrix}$$

$$=\begin{pmatrix}\gamma&\gamma v\\\frac{\gamma v}{c^2}&\gamma\\\end{pmatrix}$$
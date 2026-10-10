On this page, I will attempt to obtain a formula similar to the Schwarzschild Metric, without invoking any "loose language" about what I am doing.

### Time-Time Coefficient ONLY

For this attempt, I will only embrace the idea that clocks are slowed in the presence of a gravitational field.  This derivation will be done without beginning with any notion that rulers aligned radially will expand or shrink, while rulers aligned tangentially will not.

### The Starting Form
In two dimensional polar coordinates, the Minkowski Metric can be re-written in terms of orthogonal path elements $dr$ and $rd\phi$ as follows.

$$(cd\tau)^2=(cdt)^2-dr^2-(rd\phi)^2$$
This page is built around the conjecture that the gravitational field ought to have an effect on $dt$ as follows

$$\left(cd\tau\right)^2=\left(1-\frac{2GM}{c^2r}\right)^2\left(cdt\right)^2-\left(dr\right)^2-\left(rd\phi\right)^2$$

We will benefit by dividing by $-d\tau^2$

$$-\left(\frac{cd\tau}{d\tau}\right)^2=-\left(1-\frac{2GM}{c^2r}\right)^2\left(\frac{cdt}{d\tau}\right)^2+\left(\frac{dr}{d\tau}\right)^2+\left(\frac{rd\phi}{d\tau}\right)^2$$

The separating the "time/time" terms from the "distanc/time" terms:

$$\left(1-\frac{2GM}{c^2r}\right)^2\left(\frac{cdt}{d\tau}\right)^2-\left(\frac{cd\tau}{d\tau}\right)^2=\left(\frac{dr}{d\tau}\right)^2+\left(\frac{rd\phi}{d\tau}\right)^2$$
And factoring the left-hand-side.  

We should benefit by using one of these suggested substitutions 

$$\frac{d\tau}{d\tau}=1$$
$$\frac{dt}{d\tau}=\gamma$$
$$\frac{dr}{d\tau}=\frac{dr}{dt}\frac{dt}{d\tau}=\gamma\beta_rc=\frac{p_r}{m}$$
$$\frac{rd\phi}{d\tau}=\frac{rd\phi}{dt}=\gamma\beta_\phi c = \frac{p_\phi}{m}$$

$$c^2\left[\left(1-\frac{2GM}{c^2r}\right)^2\gamma^2-1\right]=\left(\frac{p_r}{m}\right)^2+\left(\frac{p_\phi}{m}\right)^2$$

$$c^2\left[\left(1-\frac{2GM}{c^2r}\right)\gamma-1\right]\left[\left(1-\frac{2GM}{c^2r}\right)\gamma+1\right]=\left(\frac{p_r}{m}\right)^2+\left(\frac{p_\phi}{m}\right)^2$$
Then we can divide out the larger term
$$c^2\left[\left(1-\frac{2GM}{c^2r}\right)\gamma-1\right]=\frac{\left(\frac{p_r}{m}\right)^2+\left(\frac{p_\phi}{m}\right)^2}{\left[\left(1-\frac{2GM}{c^2r}\right)\gamma+1\right]}$$
Rearranging items in the brackets:
$$c^2(\gamma-1)-\frac{2GM}{r}=\frac{\left(\frac{p_r}{m}\right)^2+\left(\frac{p_\phi}{m}\right)^2}{2\left(\frac{\gamma+1}{2}\right)-\frac{2GM}{rc^2}}$$
Now, making our first and only approximation, when $\gamma\approx 1$ and $\frac{2GM}{rc^2}\approx 0$ we can say
$$2\left(\frac{\gamma+1}{2}\right)-\frac{2GM}{rc^2}\approx 2$$

So, multiplying both sides by $m$ yields:

$$mc^2(\gamma-1)-2\frac{GMm}{r}=\frac{p_r^2+p_\phi^2}{2m}$$
Finally, adding $\frac{GMm}{r}$ to both sides, we obtain:

$$mc^2(\gamma-1)-\frac{GMm}{r}=\frac{p_r^2+p_\phi^2}{2m}+\frac{GMm}{r}$$

Since the left-hand-side gives us the kinetic energy minus the potential energy, we can conclude that the right-hand-side gives us this as well.  

$$L=KE - PE = \frac{p_r^2}{2m}+\frac{GMm}{r}$$

That means we should be able to obtain results by applying the [[Lagrangian, Action, and Euler-Lagrange Equations | Euler-Lagrange Equations ]] to either side.

$$\frac{\partial}{\partial t}\left(\frac{\partial L}{\partial\vec v}\right)-\frac{L}{\vec x}=0$$

### Comparison with the Actual Schwarzschild Metric

The Exact form of the Schwarzschild metric in two dimensions is

$$ds^2=\left(1-\frac{2GM}{c^2r}\right)(cdt)^2-\left(1-\frac{2GM}{c^2r}\right)^{-1}dr^2-(rd\phi)^2$$
Changing from the $ds^2$ expression to the $(cd\tau)^2$ expression
$$\left(1-\frac{2GM}{c^2r}\right)(cdt)^2-(cd\tau)^2=\frac{dr^2}{\left(1-\frac{2GM}{c^2r}\right)}+(rd\phi)^2$$
As above, we can divide each side by $d\tau^2$ obtaining
$$c^2\left[\left(1-\frac{2GM}{c^2r}\right)\gamma^2-1\right]=\frac{(\beta_r\gamma c)^2}{1-\frac{2GM}{c^2r}}+(\beta_\phi\gamma c)^2$$
Rearranging the terms in the brackets:
$$c^2(\gamma^2-1)-2\gamma^2\frac{GM}{r}=\frac{(\beta_r\gamma c)^2}{1-\frac{2GM}{c^2 r}}+(\beta_\phi\gamma c)^2$$
Factoring 
$$\gamma^2=(\gamma-1)(\gamma+1)$$ and dividing by $\gamma+1$ 

$$c^2(\gamma-1)-\left(\frac{2\gamma^2}{1+\gamma}\right)\frac{GM}{r}=\frac{(m\beta_r\gamma c)^2}{(\gamma+1)(1-\frac{2GM}{c^2r})m^2}+\frac{(m\beta_\phi \gamma c)^2}{(\gamma+1)m^2}$$

Multiplying by $m$ and using the approximation that $\gamma+1 \approx 2$ and $\frac{2GM}{c^2r}\approx 0$

$$mc^2(\gamma-1)-\frac{GM}{r}=\frac{p_r^2}{2m}+\frac{p_\phi^2}{2m}$$

$$KE-\gamma PE=\frac{p_r^2+p_\phi^2}{2m}$$
Collecting velocity based terms on one side, and positional based terms on the other:

$$KE-\frac{p_r^2+p_\phi^2}{2m}=\gamma PE$$



### Side By Side Comparison
Side By Side Comparison of the two calculations:  

Applying the following definitions and approximations:  
$$KE=mc^2(\gamma-1)$$
$$1\approx 1-\frac{2GM}{c^2r}$$
$$2\approx\gamma+1$$
$$p_r=m\frac{dr}{d\tau}=mc\beta_r\gamma$$
$$p_\phi=m\frac{rd\phi}{d\tau}=mc\beta_\phi\gamma$$


| Speculative version of Schwarzschild based on clock slowing only. | Official Version of Schwarzschild Metric |
| ----------------------------------------------------------------- | ---------------------------------------- |
| $$KE-PE=\frac{p_r^2+p_\phi^2}{2m}+PE$$                            | $$KE-PE=\frac{p_r^2+p_\phi^2}{2m}$$      |

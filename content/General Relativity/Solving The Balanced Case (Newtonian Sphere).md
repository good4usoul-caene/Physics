The goal here is to take the differential equation from the [[Balanced Case (Newtonian Sphere)]] 
$$\Prfrac{\dot a}{a}^2=\frac{\describe{C_1}{\frac{2GM_\text{enc}}{( r_{p,t_1})^3}}}{a^3}$$
To find the function $a(t)$.

First take the square root:

$$\frac{\dot a}{a}=\frac{\sqrt C_1}{a^{3/2}}$$
and multiply by a:
$$\Dfrac{a}{t}=\frac{\sqrt C_1}{\sqrt a}$$
Isolate variables and integrate
$$\int_{a_1}^{a_f}a^{1/2}da=\int_{t_1}^{t_f}\sqrt{C_1}dt$$
The result:
$$\frac{2}{3}\left(a_f^{3/2}-a_1^{3/2}\right)=\sqrt C_1(t_f - t_1)$$

$$\frac 2 3 a_f^{3/2}=\sqrt C_1 t_f +\describe{{C_2}}{\sqrt C_1 t_1+\frac 2 3 a_1^{3/2}}$$

$$a_f=\frac 3 2\left(\sqrt C_1 t_f +C_2\right)^{2/3}$$

Suggested diagram:  Let p=[-n...n] be a list of particles affected by the scale.  Set $a_1=1, t_1=1, G=1$  
It should be noted this makes $M_\text{encl}$ is a function of $p$.  
It also makes $r_{p,t_1}$ a function of $p$.  
 - **Question** Make a fully convincing case that $C_1$ either has no dependence on $p$ or that any such dependence will not conflict with the [[uniform density assumption (Newtonian Sphere)]]

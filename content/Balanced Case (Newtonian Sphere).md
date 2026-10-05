For a sphere homogeneously expanding with Kinetic Energy exactly equal to its gravitational binding energy, the sphere will continue to expand forever with particle velocities asymptotically approaching zero

The form is

$$\left(\frac{\dot a}{a}\right)=\frac{8\pi G\rho(t)}{3}\propto\frac{1}{a^3}$$How is this obtained?

Begin with 
$$\begin{align}E/m &= \text{Kinetic Energy Per Particle}-\text{Binding Energy Per Particle}
\\E/m &= \frac{1}{2}v^2-\frac{GM_\text{enclosed}}{r}=\text{constant}
\end{align}$$
Since this is the analysis of the balanced case, we simply set the constant to zero


[[What the scale factor, a, means]]

Noting that $r=a r_{p,t_1}$ the equation becomes and $v=\dot r = \dot a r_{p,t_1}$
$r_{p,t_1}$ is to indicate that this is a radius obtained at an initial time of $t_1$ for an particle $p$.  

The equation becomes
$$\frac 1 2 \dot a^2 r_{p,t_1}^2 - \frac{G M_\text{enc}}{a r_{p,t_1}}=0$$
Adding the potential energy to both sides obtains: 
$$\frac 1 2 \dot a^2 r_{p,t_1}^2 = \frac{G M_\text{enc}}{a r_{p,t_1}}$$
Multiplying by $\frac{2}{a^2r_{p,t_1}^2}$
$$\left(\frac{\dot a}{a}\right)^2=\describe{C_1}{\frac{2GM_\text{enc}}{( r_{p,t_1})^3}}\frac{1}{a^3}$$
This shows the proportionality with $1/a^3$ since all the other terms are constant.  But if we want to express it in terms of $$\begin{align}\rho(t)&=\frac{M_\text{enc}}{V_\text{enc}}=\frac{3M_\text{enc}}{4\pi (a r_{p,t_1})}
\\\frac{4\pi\rho(t)}{3}&=\frac{M_\text{enc}}{(ar_{p,t_1})^3}\end{align}$$ The equation of interest replaces the boxed portions 
$$\begin{align}\left(\frac{\dot a}{a}\right)^2&=\frac{2G\boxed{M_\text{enc}}}{\boxed{( r_{p,t_1})^3}}\frac{1}{\boxed{a^3}}
\\&=2G\frac{4\pi \rho(t)}{3}
\\\left(\frac{\dot a}{a}\right)^2&=\frac{8\pi G \rho}{3}
\end{align}$$
[[Solving The Balanced Case (Newtonian Sphere)]]


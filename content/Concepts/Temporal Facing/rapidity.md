Standard rapidity is associated with 
- a timelike worldline of velocity $v$ or 
- a Lorentz boost to velocity $v$.

Mathematically $$\operatorname{rap}(v,c)=\left\lbrace\begin{matrix}\operatorname{arctanh}\left(\frac{v}{c}\right), &v<c\\\operatorname{undefined},&v>c\end{matrix}\right.$$
And it's inverse $$\beta=\frac{v}{c}=\tanh{\eta}\\v=\beta c=c\tanh\eta$$
# Implicit Abstraction
The "timelike worldline" and "Lorentz boost" descriptions are abstract in the following ways.
 - A world-line need not have any particle occupying it's position in order to be defined.
 - A Lorentz boost does not require any observer or [[avatar]] actually existing or changing speed at the origin.
 - The [[timelike]] restriction requires that $v\in(-c,c)$, (which in turn puts constraint on $\beta\in(-1,1)$, but little restriction on the rapidity:  $\eta\in(-\infty,\infty)$ .

### Chrono-rapidity and Choro-rapidity
If we do not have a particle traveling with velocity $v$, we can define rapidity based on any space-time interval:

An interval is defined by two events $$\boxed{E_1=(x_1,t_t)}\text{ and }\boxed{E_2=(x_2,t_2)}$$
And defining $$\boxed{\Delta x=x_2-x_1}\text{ and }\boxed{\Delta t=t_2-t_1}$$
This interval exists between every pair of points, and do not have the pre-requisite that anyone associates the event-pair with a velocity.


$$\operatorname{rap}(\Delta x,\Delta t)=\left\lbrace
\begin{matrix}\eta_\tau=\operatorname{arctanh}\left(\frac{\Delta x}{c\Delta t}\right),&|\frac{\Delta x}{\Delta t}|<c
\\\eta_\chi=\operatorname{arctanh}\left(\frac{c\Delta t}{\Delta x}\right),&|\frac{\Delta x}{\Delta t}|>c\\\eta_c=\pm\infty,&\frac{\Delta x}{\Delta t}=\pm c\end{matrix}
\right.
$$
The extra notation suggests the following terms

 - **Chrono-Rapidity** Rapidity, $\eta_\tau$ associated with a time-like interval.
 - **Choro-Rapidity** Rapidity, $\eta_\chi$, associated with a space-like interval
 - **Photo-Rapidity** Infinite rapidity, $\eta_c$ associated with a speed-of-light interval.

We should not be too alarmed at putting $\infty$ into the range of possible rapidities.  It is not remarkable that the slope of a vertical vector may be infinite.  (See [[Putting Infinity in the Range of Arctan]]).

### Effect of Lorentz Boost
- A Lorentz chrono-boost $L(\eta_\tau)$ will render the events associated with the timelike interval $$L(\eta_\tau):(\Delta x, \Delta t)\to(0,\Delta t')$$ That is, after the boost, the two events will happen at the same place, at different times.
- A Lorentz choro-boost $$L(\eta_\chi):(\Delta x,\Delta t)\to(\Delta x',0)$$ That is, after the boost, the two events will happen at different places, at the same time.
- A Lorentz photo-boost $$\lim_{\eta_c\to\pm\infty}L(\eta_c):(\Delta x,\Delta t)\to(0,0)$$ That is, given a photon emission and reception events, even separated by billions of light years, a sufficiently large boost can bring those two events into virtual contact.


###  Conflation
(See [[Avoid Conflation]])  
Rapidity and Velocity should not be conflated.  Though there is a range of velocities where this approximation holds:

$$\frac{v}{c}=\beta\approx\eta$$
Even up to 40% of the speed of light, only a 6% difference when considering the approximation that $$\beta\approx\tanh(\beta)$$

| $$\beta$$    | $$\eta$$     | Difference | Example                                                                                                                                                                     |
| ------------ | ------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1          | 0.1003353477 | -0.34%     |                                                                                                                                                                             |
| 0.2          | 0.2027325541 | -1.37%     | The equatorial velocity of PSR J1748−2446ad, the fastest spinning known pulsar, is around $0.24c$                                                                           |
| 0.3          | 0.3095196042 | -3.17%     |                                                                                                                                                                             |
| 0.4          | 0.4236489302 | -5.91%     |                                                                                                                                                                             |
| 0.5          | 0.5493061443 | -9.86%     |                                                                                                                                                                             |
| 0.6          | 0.6931471806 | -15.52%    |                                                                                                                                                                             |
| 0.7          | 0.8673005277 | -23.90%    |                                                                                                                                                                             |
| 0.8          | 1.098612289  | -37.33%    |                                                                                                                                                                             |
| 0.9          | 1.47221949   | -63.58%    |                                                                                                                                                                             |
| 0.9640275801 | 2            | -107.46%   |                                                                                                                                                                             |
| 0.9950547537 | 3            | -201.49%   |                                                                                                                                                                             |
| 0.9993292997 | 4            | -300.27%   |                                                                                                                                                                             |
| 0.9999092043 | 5            | -400.05%   |                                                                                                                                                                             |
| 0.9999877117 | 6            | -500.01%   |                                                                                                                                                                             |
| 0.9999983369 | 7            | -600.00%   | Relativistic redshift with this rapidity would result in a 3000 Kelvin blackbody radiation to be observed as a 2.73 Kelvin blackbody radiation.                             |
| 0.9999997749 | 8            | -700.00%   |                                                                                                                                                                             |
| 0.9999999695 | 9            | -800.00%   | Protons in the Large Hadron Collider have obtained rapidities of around $\eta=9.6$                                                                                          |
| 0.9999999959 | 10           | -900.00%   | Electrons at LEP have obtained rapidities around $\eta=12.9$                                                                                                                |
| 1            | 20           | -1900.00%  | The highest energy comic rays observed have energy around $10^{20}$ eV.  If these rays were a result of a proton collision, that proton must have had a rapidity around 26. |
| 1            | 30           | -2900.00%  |                                                                                                                                                                             |
| 1            | 40           | -3900.00%  |                                                                                                                                                                             |
| 1            | 50           | -4900.00%  |                                                                                                                                                                             |
| 1            | 60           | -5900.00%  |                                                                                                                                                                             |
| 1            | 70           | -6900.00%  |                                                                                                                                                                             |
| 1            | 80           | -7900.00%  |                                                                                                                                                                             |
| 1            | 90           | -8900.00%  |                                                                                                                                                                             |

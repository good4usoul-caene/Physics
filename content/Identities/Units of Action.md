The something-Hamilton thing.
$$dS = -E dt + p dx$$
It only works if you use 
$$E=\gamma mc^2\qquad p=\gamma m \beta c$$
You can then choose
$$\overset{\text{choice 1}}{dx=\beta c dt}\qquad \text{or}\qquad \overset{\text{choice 2}}{dt=\frac{dx}{\beta c}}$$ See the trick is that either the $dt$ or $dx$ have to factor out.  If you don't make either of these choices relating $dx$ to $dt$, then you get something strange for $dS^2$
With choice 1 we have
$$\begin{align}dS&=-\gamma m c^2 dt + \gamma m \beta c (\beta c dt)
\\&=(\beta^2-1)\gamma mc^2dt
\\&=-\frac{\gamma}{\gamma^2}mc^2dt
\\&=-mc^2\frac{dt}{\gamma}\end{align}$$
Since $\frac{dt}{d\tau}=\gamma$, this becomes
$$\begin{align}dS&=-mc^2d\tau
\\S&=-mc\int cd\tau
\\&=-mc\int ds\end{align}$$
Okay, so I guess you can see a little hint of the $E\Delta t$ structure vs. the $p\Delta x$ structure.  At least the units there for $mc$ are the same as momentum, $ds$ is the units for distance.


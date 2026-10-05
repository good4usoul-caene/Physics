
The "timelike" Minkowski metric in one spatial dimension is of the form:
	
$$(cd\tau)^2=(cdt)^2-dx^2$$

Though the equation relates units of time $(dt, d\tau)$ to units of distance $dx$, the overall formula is in units of $(\text{distance})^2$.

If we multiply the equation by $m\frac{d\tau}{d\tau^2}$ we may obtain:

$$mc^2d\tau=mc^2\Prfrac{dt}{d\tau}^2d\tau-m\Prfrac{dx}{d\tau}^2d\tau$$

Now both sides of the equation are in [[Units of Action]]

We can move the time-like terms all over to the left:

$$mc^2d\tau\left(\Prfrac{dt}{d\tau}^2-1\right)=m\Prfrac{dx}{d\tau}^2d\tau$$

 - **Question** I thought I had remembered some magic happening here, where the left-hand side had somehow obtained a rationale for getting $\gamma -1$, but here I'm only getting $\gamma^2-1$.  It occurs to me that we could factor the LHS, though.

Replace $\frac{dt}{d\tau}$ with $\gamma$ and $\frac{dx}{d\tau}$ with $\frac{dx}{dt}\frac{dt}{d\tau}=\beta c\gamma = c\sigma$, and we have

$$mc^2(\gamma^2-1)d\tau=mc^2\sigma^2d\tau$$
Factor the Left Hand Side:
$$mc^2(\gamma-1)(\gamma+1)d\tau=mc^2\sigma^2d\tau$$
Divide:
$$mc^2(\gamma-1)=\frac{mc^2\sigma^2d\tau}{\gamma+1}$$

We could take the Taylor expansion series of $\gamma -1$ and it yields $\frac{\beta^2}{2}$ to second order.  While $\gamma+1$ is what... $(2+\beta^2/2)=2$, to first order?  And $c\sigma=c\beta\gamma=\gamma v$ exactly, so the previous equation approximates to

$$ m \left(\frac{v^2}{2}+...\right) = \frac{m (\describe{\gamma}{1} v)^2}{2+\describe{\left(\frac{\beta^2}{2}+...\right)}{0}}=\frac{(mv)^2}{2m}$$
This is very close to 

$$K=\frac{p^2}{2m}$$
From Newtonian Mechanics.




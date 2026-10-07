
The "timelike" Minkowski metric in one spatial dimension is of the form:
	
$$(cd\tau)^2=(cdt)^2-dx^2$$

Though the equation relates units of time $(dt, d\tau)$ to units of distance $dx$, the overall formula is in units of $(\text{distance})^2$.

If we multiply the equation by $m\frac{1}{d\tau^2}$ we may obtain:

$$mc^2=mc^2\left(\frac{dt}{d\tau}\right)^2-m\left(\frac{dx}{d\tau}\right)^2
$$

The equation is now in units of Energy, and gives a relation between $dt/d\tau$ and $dx/d\tau$  (We could obtain [[Units of Action]]  by multiplying both sides by $d\tau$.)

Instead, let's move the $dt/d\tau$ terms to the left.

$$mc^2d\tau\left(\left(\frac{dt}{d\tau}\right)^2-1\right)=m\left(\frac{dx}{d\tau}\right)^2d\tau$$

Replace 

>[!info]- Identities Involving $\gamma, \beta, dx/d\tau, dt/dtau$
>$$\frac{dt}{d\tau}=\gamma$$
>$$\frac{dx}{d\tau} = c \frac{dx}{cdt}\frac{dt}{d\tau}=c\beta\gamma$$

Obtaining:
$$mc^2(\gamma^2-1)=mc^2\sigma^2$$


>[!info]- Factor the Left Hand Side:
>$$mc^2(\gamma-1)(\gamma+1)d\tau=mc^2\sigma^2d\tau$$

Divide by $\gamma +1$, Obtaining:
$$\begin{align}mc^2(\gamma-1)&=\frac{mc^2\sigma^2d\tau}{\gamma+1}
\\&=\frac{(m^2c^2\beta \gamma)^2}{m(\gamma+1)}
\end{align}$$

The equation is now in a state where we can compare it to the Newtonian approximation:
$$KE=\frac{p^2}{2m}$$
Here is a table that compares the exact relations to the Newtonian approximation:

|                            | LHS (Energy)        | RHS                                         | Momentum                      |
| -------------------------- | ------------------- | ------------------------------------------- | ----------------------------- |
| Exact                      | $$mc^2(\gamma-1)$$  | $$\frac{(m\gamma \beta c)^2}{m(\gamma+1})$$ | $$m\gamma \beta c=\gamma mv$$ |
| Newtonian<br>Approximation | $$\frac{1}{2}mv^2$$ | $$\frac{p^2}{2m}$$                          | $$mv=m\beta c$$               |

Related links:
 - [[Taylor expansion of gamma]]
 - [[Taylor and Maclaurin Expansion]] 




We could take the Taylor expansion series of $\gamma -1$ and it yields $\frac{\beta^2}{2}$ to second order.  While $\gamma+1$ is what... $(2+\beta^2/2)=2$, to first order?  And $c\sigma=c\beta\gamma=\gamma v$ exactly, so the previous equation approximates to

$$ m \left(\frac{v^2}{2}+...\right) = \frac{m (\describe{\gamma}{1} v)^2}{2+\describe{\left(\frac{\beta^2}{2}+...\right)}{0}}=\frac{(mv)^2}{2m}$$
This is very close to 

$$K=\frac{p^2}{2m}$$
| Newtonian <br>Approximation | $$\frac{1}{2}mv^2$$ | $$\frac{p^2}{2m}$$                          | $$m\beta c$$        |

Where $$\gamma = \frac{c dt}{c d\tau}$$, $$\beta = \frac{dx}{c dt}$$, $$\beta\gamma = \sigma = \frac{dx}{c d\tau}$$
$$\beta c=\frac{dx}{dt}=v$$

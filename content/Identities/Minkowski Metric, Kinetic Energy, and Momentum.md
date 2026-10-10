
On this page, we will essentially obtain the classical mechanics result of $$KE=\frac{p^2}{2m}$$ by using algebraic manipulation of the [[Minkowski Metric]]


###  Specific Goals
See the table below to see the **exact** and **approximate** forms of momentum and kinetic energy.  The relation we are looking for will actually obtain

$$KE=\frac{p^2}{\gamma+1}$$
$$\lim_{\gamma\rightarrow 1}KE=\frac{p^2}{2m}$$
where $KE$ and $p$ are the **exact** relativistic formulas for Kinetic Enery and momentum.

  

### Minkowski Metric

The "timelike" Minkowski metric in one spatial dimension is of the form:
	
$$(cd\tau)^2=(cdt)^2-dx^2$$

### Multipy Both Sides

Multiply both sides by $m\frac{1}{d\tau^2}$ we may obtain:

$$mc^2=mc^2\left(\frac{dt}{d\tau}\right)^2-m\left(\frac{dx}{d\tau}\right)^2
$$

### Subtract from Both Sides

$$mc^2\left(\left(\frac{dt}{d\tau}\right)^2-1\right)=m\left(\frac{dx}{d\tau}\right)^2$$

### Insert Identities

Use Identities from [[Hyperbolic Trig Identites]] 

| Time related Identity       | Momentum Related Identity                                            |
| --------------------------- | -------------------------------------------------------------------- |
| $$\frac{dt}{d\tau}=\gamma$$ | $$\frac{dx}{d\tau} = c \frac{dx}{cdt}\frac{dt}{d\tau}=c\beta\gamma$$ |


$$mc^2(\gamma^2-1)=mc^2\sigma^2$$

### Difference of Squares Factoring

>$$mc^2(\gamma-1)(\gamma+1)d\tau=mc^2\sigma^2d\tau$$

### Divide

Divide by $\gamma +1$, Obtaining:
$$mc^2(\gamma-1)=\frac{mc^2\sigma^2d\tau}{\gamma+1}
\\=\frac{(m^2c^2\beta \gamma)^2}{m(\gamma+1)}
$$

### Compare

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

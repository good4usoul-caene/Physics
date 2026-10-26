### Other Descriptions

See [[Einstein Notation]]

### Use in these pages

The most common usage of the Jacobian in these pages is:

$$d(\text{known})\downarrow=\frac{\partial(\text{known})\downarrow}{\partial\text{(new)}\rightarrow}d(\text{new})\downarrow$$

The Jacobian forms a 2x2 matrix of partial derivatives

The "known" variables must be expressed in terms of the new variables.  

$$
k_1(n_1,n_2)=\text{function}
\\k_2(n_1,n_2)=\text{function}
$$


Ultimately, the "known" variables will be [[Cartesian Metric Tensor|Cartesian/Euclidean]]. 

For instance if our "known" variables are $(x,y)$ and our "new" variables are $(r,\phi)$, 

$$
\text{known}=f(\text{new})
\\x(r,\phi)=r\cos\phi
\\y(r,\phi)=r\sin\phi
$$
Our Jacobian can then be written

$$
d(\text{known})\downarrow=\frac{\partial(\text{known})\downarrow}{\partial\text{(new)}\rightarrow}d(\text{new})\downarrow
\\d(x,y)\downarrow=\frac{\partial(r\cos\phi,r\sin\phi)\downarrow}{\partial{(r,\phi)}\rightarrow}d(r,\phi)\downarrow
$$
See [[Metric Tensor in Polar Coordinates]] for the finish of this problem.

# Does the Jacobian Identify a Preferred Frame?



If 
$$
J^T\eta J=\eta 
$$

where $\eta$ is either the [[Cartesian Metric Tensor]] or [[Minkowski Metric]] Tensor, the transformation itself does not privilege any inertial frame at the metric level.

On the other hand, if

$$
J^T\eta J\ne η
$$the transformation is no longer a Lorentz isometry, and some additional structure is being introduced into the coordinate description. Whether that additional structure corresponds to a preferred frame, a synchronization convention, acceleration, rotation, or merely a different coordinate choice requires further investigation.
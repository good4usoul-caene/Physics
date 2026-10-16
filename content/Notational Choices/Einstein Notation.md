
See [[Jacobian]]

### The Jacobian

Einstein did not use a special standalone symbol for the Jacobian.  Instead, in his tensor and relativity papers he typically wrote the partial derivative itself as the transformation coefficient.  

Later texts have adopted $\Lambda{^\mu}{_\nu}$ or $J^\mu_\nu$   

$$\Lambda{^\mu}{_\nu}=\frac{\partial x'^\mu}{\partial x^\nu}$$or $$\Lambda{^\alpha}{_\beta}=\frac{\partial x^\alpha}{x'^\beta}$$ depending on the direction of the coordinate transformation.  For example, tensor components transform as $$A'^\mu=\frac{\partial x'^\mu}{\partial x^\nu}A^\nu$$
In the above, $\mu$ and $\nu$ represented different sets of coordinates, and $\alpha$ and $\beta$ represented different sets of coordinates.  But in the use of Jacobians to find the metric tensor, we will have to use forms where $\mu, \nu$ both represent the same set of coordinates and $\alpha, \beta$ represent the same set of coordinates.  

### Metric Tensors

But to define the metric tensor in its usual form, we will want to use both $\mu,\nu$ for the "new" set of coordinates and both $\alpha,\beta$ for the "known" set of coordinates.  

### Do we have to worry about Matrices and Commutativity

Many would argue that Einstein notation makes worries about matrix organization, matrix multiplication and commutativity a thing of the past.  Indeed, as long as $\beta$ and $\alpha$ index the same variable list, and $\mu$ and $\nu$ index the same variable list, and $\eta_{\alpha_\beta}$ is known, the "matrix free" calculation of $g_{\mu\nu}$ looks like this:

>for($\mu$=0; $\mu$<4; $\mu$++)
	  for($\nu$=0; $\nu$<4; $\nu$++)
	    for($\alpha$=0; $\alpha$<4; $\alpha$++)
	      for($\beta$=0; $\beta$<4; $\beta$++)
		      $g(\mu,\nu)+=\Lambda(\alpha,\mu)*\eta(\alpha,\beta)*\Lambda(\beta,\nu)$


This program could be termed as "Putting your pants on both legs at a time."  Note how the loop structure is four deep.  The ordering does 4x4x4x4 additions with $\mu\nu\alpha\beta$ looping as 0000, 0001, 0002, 0003, 0010, 0011, 0012, 0013, 0013, 0021, 0022, 0023, ... 3323, 3330, 3331, 3332, 3333.  

When individual indices are picked out, such that $\alpha\ne\beta$ and/or $\mu\ne\nu$, we can note that there is the following inequality. $$\Lambda(\alpha,\mu)\ne\Lambda(\beta,\nu)$$
However, this inequality does not hold when we consider the entire two dimensional matrixes $$\Lambda(l_\alpha,l_\mu)=\Lambda(l_\beta,l_\nu)$$
This is why the code above can make a call to the the same function $\Lambda$, twice, with two different pairs of indices.  

While technically, a computer running such code must store $g(l_\mu,l_\nu),\eta(l_\alpha,l_\beta)$, and $\Lambda(l_\beta,l_\nu)$ as arrays, there is an abstraction that permits us to ignore them.

But our goals on this web-site will usually be better served by finding an explicit matrix representation for such things
### Why No Transpose in the Code?
The transpose used in matrix multiplication is a convenience.  Remember, we only have two options with Einstein notation.  Repeated indexes (indexes that appear only once), and non-repeated indexes (indexes that appear twice).  If you're the type of person who puts on their pants both legs at the same time, then you can sum across all the pairs of indexes all at once.  If on the other hand, you tend to put on your pants one leg at a time, you might prefer arranging things in a common way.  Matrix multiplication provides us with such a common structure, whereby terms in rows in the left matrix are multiplied by terms in columns in the right matrix.  As long as our tensor rank is two or lower, simple matrix multiplications will do the trick.  When our tensor ranks reach 3 or heaven forbid, 4, we still might be able to handle it by using nested matrices, associated with double arrows: $\Downarrow$ and $\Rightarrow$.  

Let's compare [[Einstein Notation]] version of this
$$g_{\mu\nu}=\overset{(\Lambda{^\alpha}{_\mu})^T}{\boxed{\frac{\partial x^\alpha}{\partial x^\mu}}}\eta_{\alpha\beta}\overset{\Lambda{^\beta}{_\nu}}{\boxed{\frac{\partial x^\beta}{\partial x^\nu}}}$$
where $\eta_{\alpha\beta}$ may be the [[Cartesian Metric Tensor]] or [[Minkowski Metric]] tensor

Let's compare it to what we actually SHOULD do, and see if it's the same

$$\overset{\rightarrow}{d(\text{known})}\boxed{\eta}d(\text{known})\downarrow$$
$$=\overset{\rightarrow}d(new)\frac{\partial (known)\rightarrow}{\partial (new)\downarrow}\eta\frac{\partial (known)\downarrow}{\partial (new)\rightarrow}d(new)\downarrow$$
$$d(\mu\rightarrow)g_{\mu\nu}d(\nu\downarrow)=d(\mu\rightarrow)
\overset{g_{\overset{\rightarrow}{\mu}\overset{\downarrow}{\nu}}}{\boxed{\overset{(\Lambda{^\alpha}{\mu})^t}{\boxed{\frac{\partial x^{\alpha\rightarrow}}{\partial x^{\mu\downarrow}}}}\eta_{\overset{\downarrow}{\alpha}\overset{\rightarrow}{\beta}}\overset{\Lambda{^\beta}{_\nu}}{\boxed{\frac{\partial x^{\beta\downarrow}}{\partial x^{\nu\rightarrow}}}}}}d(\nu\downarrow)$$

The arrows should help in creating matrix representations of each of these parts.  Though we still may have to do 4x4x4x4 additions to calculate $g_{\mu\nu}$, at least by putting them into matrices we may start with everything neatly organized from start to finish.

### Preprints
 - [(PDF) Einstein Matrix Hybrid Notation](https://www.researchgate.net/publication/357635693_Einstein_Matrix_Hybrid_Notation) 
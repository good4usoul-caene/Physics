
### Overview
A **Taylor series** expresses a smooth function as an infinite polynomial built from its derivatives at a single point. A **Maclaurin series** is simply a Taylor series centered at \(0\).

---

## Taylor Series

If \(f(x)\) is infinitely differentiable at \(a\), then its Taylor series about \(a\) is:

$$
f(x) = \sum_{n=0}^{\infty} 
\frac{f^{(n)}(a)}{n!} (x - a)^n
$$

This polynomial matches the value, slope, curvature, and all higher derivatives of \(f\) at the point \(a\).


---

## Maclaurin Series

A Maclaurin series is the special case \(a = 0\):

$$
f(x) = \sum_{n=0}^{\infty}
\frac{f^{(n)}(0)}{n!} x^n
$$

---

## Why Does It Work?


>[!info]- The starting principle is this: **An infinitely differentiable function behaves globally like an infinite polynomial, and locally like a finite polynomial**
>This is the same intuition behind a [[Fourier expansion]], where any sufficiently smooth periodic function can be expressed as a sum of sinusoids.
>Polynomials have a special property: they are the _simplest functions_ whose derivatives are easy to compute and whose behavior near a point is completely determined by those derivatives.

To see why we are generally mostly interested in lower order terms, see the [[Zoom-In Principle]]

  The result of the expansion will look like this:
 $$f(x)=c_0 + c_1 (x-a) + c_2 (x-a)^2 + c_3 (x-a)^3 + c_4 (x-a)^4+...$$

>[!info]-  Why does this imply that polynomials can capture all smooth behaviors?
>When a function is smooth at a point a, it carries an enormous amount of information in its derivatives:
>- the value f(a) fixes the **constant term**, (a horizontal line)
>- - example:  A stationary particle: $c_0=x_a$   $$x=x_a$$
>- the slope f′(a) fixes the **linear** term, (a sloped line)
>- - example: A moving particle: $c_1=v_a$  $$x=x_a +v_a(t-t_a)$$
>- the curvature f′′(a) fixes the **quadratic** term, (a curved line)
>- - example: An accelerating particle: $c_2=\frac{1}{2}a_a$    $$x=x_a+v_a(t-t_a)+\frac{1}{2}a_a(t-t_a)^2$$
>- Higher order terms (**jerk**):
>- - example: A particle whose acceleration is changing over time.  We might ask that the particle change it's acceleration in a linear fashion which would bring a cubic term - - $$...+\frac{1}{6}c_3(t-t_a)^3+...$$
>  

>[!info]- Smoothness and "Jerk"
>The technical term for a sudden onset of acceleration in Physics is a "Jerk".  Such a sudden onset is not a smooth behavior.  While technically the full "infinite" expansion can capture as many sudden onsets of acceleration as exist, the interest of obtaining a Taylor or Maclaurin series expansion to it's $\infty^\text{th}$ term is misguided.  
>
>Far better to simply use the Maclaurin expansions in situations where the function is smooth

 The [[Zoom-In Principle]]

The [[Largest Terms First]] Principle

>[!info]- Is the polynomial unique?
In other words, the polynomial is not an arbitrary guess — it is the **unique object** whose derivatives match the function’s derivatives at the point a.
>### Why must the coefficients be unique?
>
>Once we accept that a smooth function can be represented as a power series, we also accept that the representation must be unique.
>

>[!info]- Logical Justification for Uniqueness:
>If two different power series represented the same function, their difference would be a power series that equals zero everywhere. But the only power series that is identically zero is the one whose coefficients are _all_ zero.
>
>Therefore, the coefficients are uniquely determined by the function itself.
### The Coefficients:
$$ c_n = \frac{f^{(n)}(a)}{n!} $$

is not optional — it is the _only_ choice that forces the polynomial’s derivatives to match the function’s derivatives at $a$.


>[!info]- Lower and Higher Order Terms:
>
>This information might be redundant with [[Zoom-In Principle]]
>
>### Why do the same coefficients work whether (x−a) is large or small?
>
>The coefficients describe the function’s behavior **at the point** a. They do not depend on how far away x is.
>
>If (x−a) is small, the lower‑order terms dominate and the polynomial gives an excellent approximation.
>
>If (x−a) is large, the same coefficients still define the series — but the series may converge slowly or not at all.
>
>The coefficients are fixed because they encode the function’s intrinsic behavior at a, not the distance from a.
>
>This is why Taylor series are fundamentally **local** expansions: they tell you everything about the function _near_ a, and the radius of convergence tells you how far that information remains valid.


See [[Known and Unknown Functions]]

### Summary

- Smooth functions have derivatives of all orders. 
- Those derivatives uniquely determine a polynomial expansion.    
- The coefficients are fixed by the derivatives and do not depend on (x−a).    
- When (x−a) is small, the **first few terms** of the polynomial captures the function extremely well.    
- When (x−a) is large, the same coefficients still define the series, but convergence may fail.    

This is the conceptual reason Taylor and Maclaurin expansions work: **local smoothness guarantees a unique polynomial that encodes all local behavior.**

---


What makes us expect that a polynomial must capture all such behaviors?

Once we have accepted the premise, we are also accepting the premise that there is a unique set of coefficients of each polynomial term that captures the full behavior.  

This unique set of coefficients must be the same whether $(x-a)$ is large or small.  And if (x-a) is small, we can make it so the entirety of the "coefficients of interest" are associated with small powers of (x-a).

## Common Examples

### Exponential

The exponential function is the nontrivial solution to $f'(x)=f(x)$.  The trivial solution is $f(x)=0$

$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}
$$
The first few terms are
$$e^x=\frac{x^0}{0!}+\frac{x}{1}+\frac{x^2}{2}+\frac{x^3}{6}+\frac{x^4}{24}+\frac{x^5}{1\cdot2\cdot3\cdot4\cdot5}+...$$
Euler's constant can be found by setting $x=1$ 
$$e=1+1+1/2+1/6+1/24+1/120+...$$

[Euler Constant Approximations | Desmos](https://www.desmos.com/calculator/pahcjjj62h) 
### Sine
$$
\sin x = \sum_{n=0}^{\infty}
\frac{(-1)^n}{(2n+1)!} x^{2n+1}
$$
Summation notation, by default, increments the index by one for each term in the sum.  However, this may require us to find non-intuitive functions of $n$ that provide the desired behavior.  We can break it down by separating the three functions of n here:  
$$n:[0,1,2,3]\to[0,1,2,3...]$$
$$(-1)^n:[0,1,2,3,...]\to[1,-1,1,-1,...]$$
$$2n+1:[0,1,2,3]\to[1, 3, 5, 7...]$$
A more convenient way to write this would be
$$\sin\theta=\sum_{n\in\{1,3,5,...\}}\frac{(-1)^{(n-1)/2}}{n!}\theta^n
\\=+\frac{\theta^1}{1!}-\frac{\theta^3}{3!}+\frac{\theta^5}{5!}-\frac{\theta^7}{7!}+...
$$
Or we could invoke a notation that simply shows the patterns explicitly, term-by-term.
$$\sin\theta=\sum\frac{[1,-1,1,-1,...]}{[1!,3!,5!,7!]}\theta^{[1,3,5,7]}$$

### Cosine
$$
\cos x = \sum_{n=0}^{\infty}
\frac{(-1)^n}{(2n)!} x^{2n}
$$
Mappings:
$$(-1)^{[0,1,2,3]}=[1,-1,1,-1]$$
$$(2[0,1,2,3,...])!=[0!,2!,4!,6!...]$$
$$x^{2[0,1,2,3...]}=x^{[0,2,4,6...]}$$
Term by term:
$$\cos\theta=\frac{[+1,-1,1,-1,...]}{[1,2,24,6!,...]}[1,x^2,x^4,x^6]$$
$$=1-x^2/2+x^4/24-x^6/6!$$
### Geometric Series (for |x| < 1)
$$
\frac{1}{1 - x} = \sum_{n=0}^{\infty} x^n
$$
$$\frac{1}{1-x}=x^{[0,1,2,3,4...]}=1+x+x^2+x^3+...$$

---

## Remainder Term (Error)

The error after truncating the Taylor series at degree \(N\) is given by the Lagrange remainder:

$$
R_N(x) =
\frac{f^{(N+1)}(\xi)}{(N+1)!} (x - a)^{N+1}
$$

for some \(\xi\) between \(a\) and \(x\).

---

## When Taylor Series Are Useful

- Approximating complicated functions with polynomials  
- Numerical methods  
- Solving differential equations  
- Physics and engineering (perturbation theory, small‑parameter expansions)  
- Relativity (e.g., expanding \(\gamma\), small‑velocity approximations)


# Notation Addendum

This guide defines the notational conventions used throughout the mathematics sections of this journal. Its purpose is to ensure clarity and consistency, providing a reference for common symbols and typographic styles.

:::tip
When in doubt about a symbol, this page should be your first reference. A consistent notational language is key to understanding the underlying mathematics.
:::

## Core Mathematical Objects

The distinction between scalars, vectors, points, and matrices is fundamental. Each has a distinct typographic style.

| Object | Convention | Example |
| :--- | :--- | :--- |
| **Scalar** | Italic, lowercase | $s, t, \theta$ |
| **Vector** | **Bold**, lowercase | $\mathbf{v}, \mathbf{u}, \mathbf{n}$ |
| **Point** | Italic, uppercase | $P, Q$ |
| **Matrix** | **Bold**, uppercase | $\mathbf{M}, \mathbf{T}, \mathbf{R}$ |

---

### Vectors

- **Unit Vectors**: A hat ([circumflex](https://en.wikipedia.org/wiki/Circumflex)) denotes a vector of unit length (magnitude of 1).
  - Example: $\hat{\mathbf{v}}$ is the normalized form of $\mathbf{v}$.

- **Column Form**: In graphics, vectors are conventionally treated as column vectors, especially in matrix operations.
$$
\mathbf{v} = \begin{bmatrix} x \\ y \\ z \end{bmatrix}
$$

---

### Matrices

- **Composition**: Matrix multiplication is read from right to left.
  - In the expression $\mathbf{M}_{final} = \mathbf{M}_3 \mathbf{M}_2 \mathbf{M}_1$, the transformation $\mathbf{M}_1$ is applied first.

## Operators and Functions

Operators are the "verbs" of mathematics, defining actions on the objects above.

---

### Norm and Magnitude

The **norm** signifies a vector's length or magnitude.

- **Notation**: Double vertical bars, $\|\cdot\|$.
  - Example: $\|\mathbf{v}\|$ is the Euclidean norm of vector $\mathbf{v}$.

:::warning Vector Norm vs. Scalar Absolute Value
Do not confuse the vector norm $\|\mathbf{v}\|$ with the scalar absolute value $|s|$. The former applies to vectors and measures length in space, while the latter applies to single numbers and measures distance from zero.
:::

---

### Dot Product

The dot product measures the alignment or projection of one vector onto another.

- **Notation**: A centered dot, $\cdot$.
  - Example: $\mathbf{v} \cdot \mathbf{w}$
- **Result**: Returns a single scalar value.

---

### Cross Product

The cross product produces a new vector that is orthogonal to the two input vectors.

- **Notation**: A multiplication cross, $\times$.
  - Example: $\mathbf{v} \times \mathbf{w}$
- **Result**: Returns a new vector.
- **Constraint**: Defined only for 3D vectors.

## Symbol Reference

### Common Greek Symbols

| Symbol | Name | Common Usage |
| :--- | :--- | :--- |
| $\alpha$ | Alpha | A generic scalar, often for blending or angles. |
| $\theta, \phi$ | Theta, Phi | Angles, especially in polar/spherical coordinates. |
| $\Delta$ | Delta | Represents a change or difference in a quantity (e.g., $\Delta t$ for a timestep). |
| $\lambda$ | Lambda | Eigenvalues, or a parameter in interpolation. |
| $\tau$ | Tau | Torque in physics simulations. |
| $\Sigma$ | Sigma | Summation of a series of terms. |

---

### General Mathematical Symbols

| Symbol | Meaning | Example |
| :--- | :--- | :--- |
| $=$ | Equality | $a = b$ |
| $\approx$ | Approximately equal to | $\pi \approx 3.14$ |
| $\neq$ | Not equal to | $a \neq b$ |
| $>$ / $<$ | Greater than / Less than | $5 > 3$ |
| $\geq$ / $\leq$ | Greater/less than or equal to | $x \geq 0$ |
| $\Rightarrow$ | Implies | $A \Rightarrow B$ (If A, then B) |
| $\in$ | Is an element of | $t \in [0, 1]$ (t is in the interval 0 to 1) |
| $\cdot$ | Dot product / Scalar multiplication | $\mathbf{v} \cdot \mathbf{w}$ or $s \cdot \mathbf{v}$ |
| $\times$ | Cross product | $\mathbf{v} \times \mathbf{w}$ |
| $\| \cdot \|$ | Vector Norm (Magnitude) | $\|\mathbf{v}\|$ |
| $\|\| \cdot \|\|$ | Scalar Absolute Value | $\|s\|$ |
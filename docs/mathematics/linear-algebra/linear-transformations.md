# Linear Transformations

A **linear transformation** (or **linear map**) is a function between two vector spaces that preserves the structure of vector addition and scalar multiplication. In game development, linear transformations underpin geometric operations such as scaling, rotation, reflection, and shear.

Every linear transformation can be represented by a matrix. This correspondence is central to the mathematical foundation of computer graphics.

## Formal Definition

Let $T : \mathbb{R}^n \to \mathbb{R}^m$ be a transformation. It is **linear** if, for all vectors $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ and all scalars $c \in \mathbb{R}$:

1. **Additivity**: $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$
2. **Homogeneity**: $T(c\mathbf{v}) = cT(\mathbf{v})$

These two properties together form the **principle of superposition**.

## Geometric Interpretation

The defining properties of a linear transformation impose specific geometric constraints:

- **The origin remains fixed**: A linear transformation must satisfy $T(\mathbf{0}) = \mathbf{0}$.
- **Lines remain lines**: Straight lines in the input space are mapped to straight lines in the output space.
- **Parallelism and ratios are preserved**: Grid lines remain parallel and evenly spaced.

These properties allow linear transformations to deform space in predictable ways—stretching, rotating, and skewing—without introducing nonlinear distortion.

:::info
Since a linear transformation always maps the origin to itself, **translation is not a linear transformation**. It is an **affine transformation**, which is covered in the [Affine Transformations](./affine-transformations) section.
:::

## Matrix Representation

Every linear transformation $T : \mathbb{R}^n \to \mathbb{R}^m$ can be written as a matrix-vector product:

$$
T(\mathbf{v}) = \mathbf{M} \mathbf{v}
$$

Here, $\mathbf{M} \in \mathbb{R}^{m \times n}$ is the **transformation matrix** associated with $T$.

To construct $\mathbf{M}$, observe how $T$ maps the **standard basis vectors** of $\mathbb{R}^n$. The $j$-th column of $\mathbf{M}$ is the image of the $j$-th basis vector under $T$:

$$
\mathbf{M} = \begin{bmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) & \cdots & T(\mathbf{e}_n) \end{bmatrix}
$$

For example, in 3D space with basis vectors:

- $\mathbf{i} = (1, 0, 0)$
- $\mathbf{j} = (0, 1, 0)$
- $\mathbf{k} = (0, 0, 1)$

The matrix becomes:

$$
\mathbf{M} = \begin{bmatrix}
\begin{pmatrix} T(\mathbf{i})_x \\ T(\mathbf{i})_y \\ T(\mathbf{i})_z \end{pmatrix} &
\begin{pmatrix} T(\mathbf{j})_x \\ T(\mathbf{j})_y \\ T(\mathbf{j})_z \end{pmatrix} &
\begin{pmatrix} T(\mathbf{k})_x \\ T(\mathbf{k})_y \\ T(\mathbf{k})_z \end{pmatrix}
\end{bmatrix}
$$

## Example: 2D Shear

Consider a 2D transformation that shears vectors **horizontally**, preserving the $y$-component while adding it to the $x$-component.

Let $T : \mathbb{R}^2 \to \mathbb{R}^2$ be defined by:

- $T(\mathbf{i}) = (1, 0)$
- $T(\mathbf{j}) = (1, 1)$

The resulting matrix is:

$$
\mathbf{M} = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}
$$

Apply this matrix to an arbitrary vector $\mathbf{v} = (2, 3)$:

$$
\mathbf{v}' = \mathbf{M} \mathbf{v} =
\begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}
\begin{bmatrix} 2 \\ 3 \end{bmatrix}
=
\begin{bmatrix} 1 \cdot 2 + 1 \cdot 3 \\ 0 \cdot 2 + 1 \cdot 3 \end{bmatrix}
=
\begin{bmatrix} 5 \\ 3 \end{bmatrix}
$$

This matches the definition: the $y$-component is unchanged, and the $x$-component has been sheared by adding the $y$ value.

This principle, that the columns of a matrix represent the transformed basis vectors, forms the foundation of constructing and understanding transformation matrices in graphics.

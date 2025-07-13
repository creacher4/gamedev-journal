# Matrices

A matrix is a rectangular grid of numbers arranged in rows and columns. In game development, matrices are the primary tool for representing and performing geometric transformations. They provide a compact and efficient way to package operations like rotation, scaling, and translation into a single mathematical object.

## Representation

A matrix is defined by its dimensions: rows $\times$ columns. An $m \times n$ matrix has $m$ rows and $n$ columns. Individual elements are accessed using subscripts, typically $M_{rc}$, where $r$ is the row index and $c$ is the column index.

$$
\mathbf{M} = \begin{bmatrix}
M_{11} & M_{12} & M_{13} \\
M_{21} & M_{22} & M_{23} \\
M_{31} & M_{32} & M_{33}
\end{bmatrix}
$$

---

### The Identity Matrix

The **identity matrix**, denoted $\mathbf{I}$, is a square matrix with 1s on the main diagonal and 0s everywhere else. It is the matrix equivalent of the number 1; multiplying any matrix by the identity matrix leaves it unchanged ($\mathbf{M}\mathbf{I} = \mathbf{I}\mathbf{M} = \mathbf{M}$).

$$
\mathbf{I}_3 = \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

## Operations

### Transposition

The **transpose** of a matrix $\mathbf{M}$, denoted $\mathbf{M}^T$, is formed by swapping its rows and columns. The first row of $\mathbf{M}$ becomes the first column of $\mathbf{M}^T$, and so on.

$$
\text{If } \mathbf{M} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}, \text{ then } \mathbf{M}^T = \begin{bmatrix} a & c \\ b & d \end{bmatrix}
$$

A key property is that the transpose of a product is the product of the transposes in reverse order: $(\mathbf{A}\mathbf{B})^T = \mathbf{B}^T\mathbf{A}^T$. For rotation matrices, the transpose is equal to the inverse, making it a very cheap way to compute the opposite rotation.

---

### Matrix Multiplication

Matrix multiplication corresponds to the composition of transformations. If matrix $\mathbf{A}$ represents one transformation and matrix $\mathbf{B}$ represents another, the matrix product $\mathbf{C} = \mathbf{A}\mathbf{B}$ represents the transformation of applying $\mathbf{B}$ first, then $\mathbf{A}$.

:::warning Order Matters!
Matrix multiplication is **not commutative**: in general, $\mathbf{A}\mathbf{B} \neq \mathbf{B}\mathbf{A}$. The order of multiplication defines the order of transformations. In graphics, transformations are applied from right to left. In the expression $\mathbf{v}' = \mathbf{T} \mathbf{R} \mathbf{S} \mathbf{v}$, the vector is first scaled ($\mathbf{S}$), then rotated ($\mathbf{R}$), and finally translated ($\mathbf{T}$).
:::

To multiply two matrices, the number of columns in the first matrix must equal the number of rows in the second. The element at row $i$, column $j$ of the resulting matrix is the dot product of the $i$-th row of the first matrix and the $j$-th column of the second.

---

### Determinant

The **determinant** of a square matrix, denoted $\det(\mathbf{M})$ or $|\mathbf{M}|$, is a scalar value that provides information about the transformation it represents.
- Geometrically, its absolute value represents the scaling factor of volume. If a unit cube is transformed by $\mathbf{M}$, its new volume will be $|\det(\mathbf{M})|$.
- If $\det(\mathbf{M}) = 0$, the matrix is **singular**. This means the transformation collapses the object into a lower dimension (e.g., squashing it into a plane or a line), and the matrix has no inverse.

---

### Inverse

The **inverse** of a square matrix $\mathbf{M}$, denoted $\mathbf{M}^{-1}$, is a matrix that "undoes" the transformation of $\mathbf{M}$. When a matrix is multiplied by its inverse, the result is the identity matrix: $\mathbf{M}\mathbf{M}^{-1} = \mathbf{M}^{-1}\mathbf{M} = \mathbf{I}$.

The inverse is crucial for tasks like converting coordinates from world space to a model's local space. However, computing the inverse is often computationally expensive and can be numerically unstable. In many cases, it's better to construct the inverse transformation directly (e.g., the inverse of a translation by $(x, y, z)$ is a translation by $(-x, -y, -z)$).

## Transformation Matrices in 3D

In 3D graphics, we use 4x4 matrices and **homogeneous coordinates** to handle transformations. By adding a fourth component ($w$) to our vectors, we can represent translation as a matrix multiplication, allowing us to combine it with rotation and scaling into a single matrix.

- A **point** is represented as $(x, y, z, 1)$.
- A **vector** (direction) is represented as $(x, y, z, 0)$.

This distinction is powerful: when a 4x4 translation matrix is applied, it will affect points (since the translation values are multiplied by $w=1$) but not vectors (since they are multiplied by $w=0$).

---

### Translation Matrix

$$
\mathbf{T}(t_x, t_y, t_z) = \begin{bmatrix}
1 & 0 & 0 & t_x \\
0 & 1 & 0 & t_y \\
0 & 0 & 1 & t_z \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

---

### Scaling Matrix

$$
\mathbf{S}(s_x, s_y, s_z) = \begin{bmatrix}
s_x & 0 & 0 & 0 \\
0 & s_y & 0 & 0 \\
0 & 0 & s_z & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

---

### Rotation Matrices

Rotation matrices rotate vectors around the origin. The matrices for rotating by an angle $\theta$ around the cardinal axes are:

##### X-axis rotation:
$$
\mathbf{R}_x(\theta) = \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & \cos\theta & -\sin\theta & 0 \\
0 & \sin\theta & \cos\theta & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

##### Y-axis rotation:
$$
\mathbf{R}_y(\theta) = \begin{bmatrix}
\cos\theta & 0 & \sin\theta & 0 \\
0 & 1 & 0 & 0 \\
-\sin\theta & 0 & \cos\theta & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

##### Z-axis rotation:
$$
\mathbf{R}_z(\theta) = \begin{bmatrix}
\cos\theta & -\sin\theta & 0 & 0 \\
\sin\theta & \cos\theta & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$
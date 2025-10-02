# Installing the Product

This guide will walk you through the process of installing the Protegrity product.

## Add the Protegrity Helm repository

```bash
helm repo add protegrity https://protegrity.github.io/charts
helm repo update
```

## Install the product

```bash
helm install protegrity-product protegrity/protegrity-product
```

# Installing the Product

This guide will walk you through the process of installing the protoBolt product.

## Add the protoBolt Helm repository

```bash
helm repo add protoBolt https://protoBolt.github.io/charts
helm repo update
```

## Install the product

```bash
helm install protoBolt-product protoBolt/protoBolt-product
```
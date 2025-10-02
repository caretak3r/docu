# Installing the Platform

This guide will walk you through the process of installing the protoBolt platform.

## Add the protoBolt Helm repository

```bash
helm repo add protoBolt https://protoBolt.github.io/charts
helm repo update
```

## Install the platform

```bash
helm install protoBolt-platform protoBolt/protoBolt-platform
```
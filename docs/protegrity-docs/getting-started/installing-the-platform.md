# Installing the Platform

This guide will walk you through the process of installing the Protegrity platform.

## Add the Protegrity Helm repository

```bash
helm repo add protegrity https://protegrity.github.io/charts
helm repo update
```

## Install the platform

```bash
helm install protegrity-platform protegrity/protegrity-platform
```

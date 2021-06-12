terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.45"
    }
  }

  required_version = ">= 1"
}

provider "aws" {
  region = var.region
}

resource "aws_iam_user" "terraform_admin" {
  name = "terraform_admin"
}

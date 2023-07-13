# Toolbox test

## How to run

Just execute `docker-compose up -d` and the frontend will be available at `http://localhost:8080` and the backend will be available at `http://localhost:3000`.

## Resources

- [Project cards](https://www.example.com) (Didn't use branches and pull requests here, seemed a little bit too much)
- [Postman collection](https://app.getpostman.com/run-collection/26739489-170a7ed6-38dc-4620-93b7-8e0009fd3529?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D26739489-170a7ed6-38dc-4620-93b7-8e0009fd3529%26entityType%3Dcollection%26workspaceId%3D83e43c2f-12cb-4379-b820-025a3c9c8e22)

## Decisions

- Didn't use models and services structure because we don't need model validation. We are not storing information.
- Didn't use routes file because we only have two routes.
- Didn't get 100% coverage, but it's close enough.
- Didn't handle properly the errors in the missing files case. What should be the output? Logged for now
- Didn't move the test variables to another file
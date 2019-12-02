---
title: Squadron - First public release
author: Philippe Birbaum
authorURL: https://github.com/https://github.com/philbir
authorImageURL: https://avatars.githubusercontent.com/philbir
---

Last month we have released our first Open Source version of [Squadron](https://swisslife-oss.github.io/squadron/). 🎉
Squadron is a testing framework which makes ist extremely easy to write integration & system tests against resources that run in a container or in the cloud.

The tool has been internally developed at Swiss Life and was heavily used to write tests against SQL Server and MongoDB for more than one year now.

With the new Open Source version 0.5 we have now added many more providers and plan do add even more.

## Supported resources

| Provider                                                             | Nuget Package                   |
| -------------------------------------------------------------------- | ------------------------------- |
| [Mongo](../../../../squadron/docs/mongodb)                           | `Squadron.MongoDb`              |
| [Mongo Replica Set](../../../../squadron/docs/mongodb-rs)            | `Squadron.MongoDb`              |
| [SQL Server](../../../../squadron/docs/sqlserver.md)                 | `Squadron.SqlServer`            |
| [Elastic Search](../../../../squadron/docs/elasticsearch)            | `Squadron.ElasticSearch`        |
| [PostgreSQL](../../../../squadron/docs/postgresql)                   | `Squadron.PostgreSql`           |
| [Redis](../../../../squadron/docs/redis)                             | `Squadron.Redis`                |
| [RabbitMQ](../../../../squadron/docs/rabbitmq)                       | `Squadron.RabbitMQ`             |
| [Azure Storage](../../../../squadron/docs/azure-storage)             | `Squadron.AzureStorage`         |
| [Azure ServiceBus](../../../../squadron/docs/azure-cloud-servicebus) | `Squadron.AzureCloudServiceBus` |
| [Generic](../../../../squadron/docs/generic-container)               | `Squadron.Core`                 |
| [Compose](../../../../squadron/docs/compose)                         | `Squadron.Compose`              |

## Azure Cloud resources

Whenever possible we recommend to use a container resource to use with Squadron, but there are some cases
when there is no container replacement for a cloud service.
An an example is [Azure Storage](https://azure.microsoft.com/en-us/services/storage/) where the basic features
are available using the [Azurite](https://github.com/Azure/Azurite) emulator, but some more advanced
features like [leases](https://docs.microsoft.com/en-us/rest/api/storageservices/lease-blob) are only
available where using the "Real" cloud service.

For this we have build the functionality the manage Azure services using the management API's.
Squadron will automatically provision new resources and delete them when the test has completed.
Another way is to use an existing azure resource and provision some entities for the test and remove
them after. This can save some time as creating resource is usually a expensive operation.
The first resource we have implemented for Azure is [Azure Service Bus](../../../../squadron/docs/azure-cloud-servicebus).

<!--truncate-->

## Getting started

1. Create a new xUnit Project

```bash
dotnet new xunit -name squadron-quickstart
```

2. Install the Squadron nuget package Mongo for within your test project:

```bash
dotnet add package Squadron.Mongo
```

Inject and use the MongoResource into your test class constructor:

```csharp
public class UserRepositoryTests : IClassFixture<MongoResource>
{
    private readonly MongoResource _mongoResource;

    public UserRepositoryTests(MongoResource mongoResource)
    {
        _mongoResource = mongoResource;
    }

    [Fact]
    public async Task UserRepository_Add_AddedUser()
    {
        //arrange
        var user = User.CreateSample();
        IMongoDatabase db = _mongoResource.CreateDatabase();
        var repo = new UserRepository(db);

        //act
        await repo.AddAsync(user);

        //assert
        User createdUser = await GetUserAsync(db, user.Id);
        createdUser.Should().BeEquivalentTo(user);
    }
}
```

You can find more quick starts and samples in our [docs](https://swisslife-oss.github.io/squadron/docs/quickstart).

## Roadmap

### More resources

With future releases we plan to add the following resources to squadron:

- Kafka
- RavenDB
- MySQL
- Azure Storage
- Azure Event Hub

### Testing framework support

The current release only supports [xUnit](https://xunit.net/) as the testing framework.
We are now in the process of
abstracting the initialization of resources to make it framework independent.
[NUnit](https://nunit.org/) is the next framework on our list to be supported,
and of course with the new abstraction you can use Squadron in any .NET Core app.

### Samples

We are building a sample solution to show some more complex scenarios using Squadron.
Especially using the [Compose Resource](https://swisslife-oss.github.io/squadron/docs/compose) and integration with Selenium tests.

If you have some ideas for improvements or you'd like to see other integrations in Squadron feel free
to create an [issue](https://github.com/SwissLife-OSS/squadron/issues) or submit a [pull request](https://github.com/SwissLife-OSS/squadron/pulls).

You can also reach out to us using [Slack](https://join.slack.com/t/swisslife-oss/shared_invite/enQtNzk1ODI1NTAyNjExLTJmM2I2ODMxZjk4ZjBhYWIzY2U3YmI1ZGU3YmVjZGI0ZjA3MDllZGYwOGMxNjAwYTExMmFiMTQwMjhmNjY5ZTY) channel.

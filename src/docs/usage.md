# API Usage

## Fetch Characters

To fetch characters, use the `/characters` endpoint. This will return detailed information about each character.

### Example Query

```graphql
{
  characters {
    results {
      name
      species
      gender
    }
  }
}

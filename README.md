# GraphBrainz Extension: Boilerplate

A boilerplate project for easier development of GraphBrainz extensions!

Begin developing your extension like so:

```console
$ git clone git@github.com:exogen/graphbrainz-extension-boilerplate.git
$ cd graphbrainz-extension-boilerplate
$ npm install
```

Then start changing files! You can run a demo server with your extension like
so:

```console
$ npm run start
```

You even get automatically generated schema documentation; below are the docs
for the included demo schema.

<!-- START graphql-markdown -->

## Schema Types

<details>
  <summary><strong>Table of Contents</strong></summary>

  * [Objects](#objects)
    * [Artist](#artist)

</details>

### Objects

#### Artist

:small_blue_diamond: *This type has been extended.
See the [base schema](https://github.com/exogen/graphbrainz/docs/types.md) for a description and additional fields.*

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>helloWorld</strong></td>
<td valign="top"><a href="https://github.com/exogen/graphbrainz/docs/types.md#string">String</a>!</td>
<td>

A message that says hello to the artist.

</td>
</tr>
</tbody>
</table>

<!-- END graphql-markdown -->

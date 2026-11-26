/** Maps a theme key such as `radiusMd` to its token name `md` for the given prefix. */
export type ThemeTokenSuffix<
  Key,
  Prefix extends string,
> = Key extends `${Prefix}${infer Suffix}` ? Uncapitalize<Suffix> : never

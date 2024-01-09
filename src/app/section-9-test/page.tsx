"use client";

export default function Page() {
  function reverse(str: string): string {
    if (str.length <= 1) {
      return str;
    }
    return reverse(str.slice(1)) + str[0];
  }

  console.log(reverse("テスト"));

  // reverse("テスト") は、reverse("スト") + "テ" を呼び出します。
  // str[0] は "テ" で、str.slice(1) は "スト" です。
  // 次に、reverse("スト") が呼び出され、reverse("ト") + "ス" を呼び出します。
  // 次に reverse("ト") が呼び出されます。str の長さが1なので、この関数は "ト" をそのまま返します。

  // reverse("ト") は "ト" を返します。
  // reverse("スト") は "ト" + "ス" = "トス" を返します。
  // 最終的に、reverse("テスト") は "トス" + "テ" = "トステ" を返します。

  return <div></div>;
}

interface IAPIData {
  rates: {
    USD: number;
  };
}

async function getDollarQuotation(): Promise<number | null> {
  try {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/BRL",
    );
    const data = (await response.json()) as IAPIData;

    return data.rates.USD;
  } catch {
    return null;
  }
}

export async function convertToDollars(value: number): Promise<string> {
  const quotation = await getDollarQuotation();

  return quotation !== null
    ? (value * quotation).toFixed(2)
    : value.toString();
}

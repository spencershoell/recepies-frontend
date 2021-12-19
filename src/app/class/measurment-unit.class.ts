export enum MeasurementType {
    Weight = "weight",
    Volume = "volume",
    Temperature = "temperature",
    Time = "time"
}

export enum UnitType {
    Standard = "standard",
    Metric = "metric",
    Both = "both"
}

export class Measurment {
    static Teaspoon: Unit = {
        name: "teaspoon",
        short: "tsp",
        long: "Teaspoon",
        measurementType: MeasurementType.Volume,
        type: UnitType.Standard
    }

    static Tablespoon: Unit = {
        name: "tablespoon",
        short: "tbl",
        long: "Tablespoon",
        measurementType: MeasurementType.Volume,
        type: UnitType.Standard
    }

    static FluidOunce: Unit = {
        name: "fluid ounce",
        short: "fl oz",
        long: "Fluid Ounce",
        measurementType: MeasurementType.Volume,
        type: UnitType.Standard
    }

    static Cup: Unit = {
        name: "cup",
        short: "cup",
        long: "Cup",
        measurementType: MeasurementType.Volume,
        type: UnitType.Standard
    }

    static Pint: Unit = {
        name: "pint",
        short: "pt",
        long: "Pint",
        measurementType: MeasurementType.Volume,
        type: UnitType.Standard
    }

    static Quart: Unit = {
        name: "quart",
        short: "qt",
        long: "Quart",
        measurementType: MeasurementType.Volume,
        type: UnitType.Standard
    }

    static Gallon: Unit = {
        name: "gallon",
        short: "gal",
        long: "Gallon",
        measurementType: MeasurementType.Volume,
        type: UnitType.Standard
    }

    static Ounce: Unit = {
        name: "ounce",
        short: "oz",
        long: "Ounce",
        measurementType: MeasurementType.Weight,
        type: UnitType.Standard
    }

    static Pound: Unit = {
        name: "pound",
        short: "lb",
        long: "Pound",
        measurementType: MeasurementType.Weight,
        type: UnitType.Standard
    }

    static Fahrenheit: Unit = {
        name: "fahrenheit",
        short: "F",
        long: "Fahrenheit",
        measurementType: MeasurementType.Temperature,
        type: UnitType.Standard
    }

    static Millileter: Unit = {
        name: "millileter",
        short: "ml",
        long: "Millileter",
        measurementType: MeasurementType.Volume,
        type: UnitType.Metric
    }

    static Liter: Unit = {
        name: "liter",
        short: "l",
        long: "Millileter",
        measurementType: MeasurementType.Volume,
        type: UnitType.Metric
    }

    static Gram: Unit = {
        name: "gram",
        short: "g",
        long: "Gram",
        measurementType: MeasurementType.Weight,
        type: UnitType.Metric
    }

    static Kilogram: Unit = {
        name: "kilogram",
        short: "kg",
        long: "Kilogram",
        measurementType: MeasurementType.Weight,
        type: UnitType.Metric
    }

    static Celsius: Unit = {
        name: "celsius",
        short: "C",
        long: "Celsius",
        measurementType: MeasurementType.Temperature,
        type: UnitType.Metric
    }

    static Second: Unit = {
        name: "second",
        short: "second",
        long: "Second",
        measurementType: MeasurementType.Time,
        type: UnitType.Both
    }

    static Minute: Unit = {
        name: "minute",
        short: "minute",
        long: "Minute",
        measurementType: MeasurementType.Time,
        type: UnitType.Both
    }

    static Hour: Unit = {
        name: "hour",
        short: "hour",
        long: "Hour",
        measurementType: MeasurementType.Time,
        type: UnitType.Both
    }

    static Day: Unit = {
        name: "day",
        short: "day",
        long: "Day",
        measurementType: MeasurementType.Time,
        type: UnitType.Both
    }
}

export interface Unit {
    name: string;
    short: string;
    long: string;
    measurementType: MeasurementType;
    type: UnitType
}
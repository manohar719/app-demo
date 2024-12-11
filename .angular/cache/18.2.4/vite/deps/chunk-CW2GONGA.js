import {
  validatePackage
} from "./chunk-4ATVGF2Z.js";
import {
  EventEmitter,
  Inject,
  Injectable,
  LOCALE_ID,
  NgModule,
  Pipe,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵinject
} from "./chunk-4CNRQKIC.js";

// node_modules/@progress/kendo-intl/dist/es/cldr/default-data.js
var defaultData = {
  en: {
    name: "en",
    identity: {
      version: {
        _unicodeVersion: "14.0.0",
        _cldrVersion: "41"
      },
      language: "en"
    },
    territory: "US",
    numbers: {
      symbols: {
        decimal: ".",
        group: ",",
        list: ";",
        percentSign: "%",
        plusSign: "+",
        minusSign: "-",
        exponential: "E",
        superscriptingExponent: "×",
        perMille: "‰",
        infinity: "∞",
        nan: "NaN",
        timeSeparator: ":",
        approximatelySign: "~"
      },
      decimal: {
        patterns: ["n"],
        groupSize: [3]
      },
      scientific: {
        patterns: ["nEn"],
        groupSize: []
      },
      percent: {
        patterns: ["n%"],
        groupSize: [3]
      },
      currency: {
        patterns: ["$n"],
        groupSize: [3],
        "unitPattern-count-one": "n $",
        "unitPattern-count-other": "n $"
      },
      currencies: {
        BGN: {
          displayName: "Bulgarian Lev",
          "displayName-count-one": "Bulgarian lev",
          "displayName-count-other": "Bulgarian leva",
          symbol: "BGN"
        },
        EUR: {
          displayName: "Euro",
          "displayName-count-one": "euro",
          "displayName-count-other": "euros",
          symbol: "€",
          "symbol-alt-narrow": "€"
        },
        USD: {
          displayName: "US Dollar",
          "displayName-count-one": "US dollar",
          "displayName-count-other": "US dollars",
          symbol: "$",
          "symbol-alt-narrow": "$"
        }
      },
      localeCurrency: "USD",
      accounting: {
        patterns: ["$n", "($n)"],
        groupSize: [3]
      }
    },
    calendar: {
      gmtFormat: "GMT{0}",
      gmtZeroFormat: "GMT",
      patterns: {
        d: "M/d/y",
        D: "EEEE, MMMM d, y",
        m: "MMM d",
        M: "MMMM d",
        y: "MMM y",
        Y: "MMMM y",
        F: "EEEE, MMMM d, y h:mm:ss a",
        g: "M/d/y h:mm a",
        G: "M/d/y h:mm:ss a",
        t: "h:mm a",
        T: "h:mm:ss a",
        s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
      },
      dateTimeFormats: {
        full: "{1} 'at' {0}",
        long: "{1} 'at' {0}",
        medium: "{1}, {0}",
        short: "{1}, {0}",
        availableFormats: {
          Bh: "h B",
          Bhm: "h:mm B",
          Bhms: "h:mm:ss B",
          d: "d",
          E: "ccc",
          EBhm: "E h:mm B",
          EBhms: "E h:mm:ss B",
          Ed: "d E",
          Ehm: "E h:mm a",
          EHm: "E HH:mm",
          Ehms: "E h:mm:ss a",
          EHms: "E HH:mm:ss",
          Gy: "y G",
          GyMd: "M/d/y GGGGG",
          GyMMM: "MMM y G",
          GyMMMd: "MMM d, y G",
          GyMMMEd: "E, MMM d, y G",
          h: "h a",
          H: "HH",
          hm: "h:mm a",
          Hm: "HH:mm",
          hms: "h:mm:ss a",
          Hms: "HH:mm:ss",
          hmsv: "h:mm:ss a v",
          Hmsv: "HH:mm:ss v",
          hmv: "h:mm a v",
          Hmv: "HH:mm v",
          M: "L",
          Md: "M/d",
          MEd: "E, M/d",
          MMM: "LLL",
          MMMd: "MMM d",
          MMMEd: "E, MMM d",
          MMMMd: "MMMM d",
          "MMMMW-count-one": "'week' W 'of' MMMM",
          "MMMMW-count-other": "'week' W 'of' MMMM",
          ms: "mm:ss",
          y: "y",
          yM: "M/y",
          yMd: "M/d/y",
          yMEd: "E, M/d/y",
          yMMM: "MMM y",
          yMMMd: "MMM d, y",
          yMMMEd: "E, MMM d, y",
          yMMMM: "MMMM y",
          yQQQ: "QQQ y",
          yQQQQ: "QQQQ y",
          "yw-count-one": "'week' w 'of' Y",
          "yw-count-other": "'week' w 'of' Y"
        }
      },
      timeFormats: {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
      },
      dateFormats: {
        full: "EEEE, MMMM d, y",
        long: "MMMM d, y",
        medium: "MMM d, y",
        short: "M/d/yy"
      },
      days: {
        format: {
          abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        "stand-alone": {
          abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        }
      },
      months: {
        format: {
          abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        "stand-alone": {
          abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }
      },
      quarters: {
        format: {
          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
          narrow: ["1", "2", "3", "4"],
          wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
        },
        "stand-alone": {
          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
          narrow: ["1", "2", "3", "4"],
          wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
        }
      },
      dayPeriods: {
        format: {
          abbreviated: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          },
          narrow: {
            midnight: "mi",
            am: "a",
            "am-alt-variant": "am",
            noon: "n",
            pm: "p",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          },
          wide: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          }
        },
        "stand-alone": {
          abbreviated: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          },
          narrow: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          },
          wide: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          }
        }
      },
      eras: {
        format: {
          wide: {
            "0": "Before Christ",
            "1": "Anno Domini",
            "0-alt-variant": "Before Common Era",
            "1-alt-variant": "Common Era"
          },
          abbreviated: {
            "0": "BC",
            "1": "AD",
            "0-alt-variant": "BCE",
            "1-alt-variant": "CE"
          },
          narrow: {
            "0": "B",
            "1": "A",
            "0-alt-variant": "BCE",
            "1-alt-variant": "CE"
          }
        }
      },
      dateFields: {
        era: {
          wide: "era",
          short: "era",
          narrow: "era"
        },
        year: {
          wide: "year",
          short: "yr.",
          narrow: "yr."
        },
        quarter: {
          wide: "quarter",
          short: "qtr.",
          narrow: "qtr."
        },
        month: {
          wide: "month",
          short: "mo.",
          narrow: "mo."
        },
        week: {
          wide: "week",
          short: "wk.",
          narrow: "wk."
        },
        weekOfMonth: {
          wide: "week of month",
          short: "wk. of mo.",
          narrow: "wk. of mo."
        },
        day: {
          wide: "day",
          short: "day",
          narrow: "day"
        },
        dayOfYear: {
          wide: "day of year",
          short: "day of yr.",
          narrow: "day of yr."
        },
        weekday: {
          wide: "day of the week",
          short: "day of wk.",
          narrow: "day of wk."
        },
        weekdayOfMonth: {
          wide: "weekday of the month",
          short: "wkday. of mo.",
          narrow: "wkday. of mo."
        },
        dayperiod: {
          short: "AM/PM",
          wide: "AM/PM",
          narrow: "AM/PM"
        },
        hour: {
          wide: "hour",
          short: "hr.",
          narrow: "hr."
        },
        minute: {
          wide: "minute",
          short: "min.",
          narrow: "min."
        },
        second: {
          wide: "second",
          short: "sec.",
          narrow: "sec."
        },
        zone: {
          wide: "time zone",
          short: "zone",
          narrow: "zone"
        },
        millisecond: {
          narrow: "ms",
          short: "ms",
          wide: "millisecond"
        }
      }
    }
  },
  supplemental: {
    likelySubtags: {
      en: "en-Latn-US"
    },
    currencyData: {
      region: {
        US: [{
          USD: {
            _from: "1792-01-01"
          }
        }]
      }
    },
    weekData: {
      firstDay: {
        US: "sun"
      },
      weekendStart: {
        "001": "sat"
      },
      weekendEnd: {
        "001": "sun"
      }
    }
  }
};
var default_data_default = defaultData;

// node_modules/@progress/kendo-intl/dist/es/common/is-string.js
function isString(value) {
  return typeof value === "string";
}

// node_modules/@progress/kendo-intl/dist/es/error-details.js
var error_details_default = {
  "NoLocale": "Missing locale info for '{0}'",
  "NoCurrency": "Cannot determine currency information. Please load the locale currencies data.",
  "NoSupplementalCurrency": "Cannot determine currency. Please load the supplemental currencyData.",
  "NoCurrencyRegion": "No currency data for region '{0}'",
  "NoCurrencyDisplay": "Cannot determine currency display information. Please load the locale currencies data. The default culture does not include the all currencies data.",
  "NoGMTInfo": "Cannot determine locale GMT format. Please load the locale timeZoneNames data.",
  "NoWeekData": "Cannot determine locale first day of week. Please load the supplemental weekData.",
  "NoFirstDay": "Cannot determine locale first day of week. Please load the supplemental weekData. The default culture includes only the 'en-US' first day info.",
  "NoValidCurrency": "Cannot determine a default currency for the {0} locale. Please specify explicitly the currency with the format options.",
  "NoDateFieldNames": "Cannot determine the locale date field names. Please load the locale dateFields data."
};

// node_modules/@progress/kendo-intl/dist/es/errors.js
var formatRegExp = /\{(\d+)}?\}/g;
var IntlError = function IntlError2(ref) {
  var name = ref.name;
  var message = ref.message;
  if (!name || !message) {
    throw new Error("{ name: string, message: string } object is required!");
  }
  this.name = name;
  this.message = message;
};
IntlError.prototype.formatMessage = function formatMessage() {
  var values = [], len = arguments.length;
  while (len--) values[len] = arguments[len];
  var flattenValues = flatten(values);
  var formattedMessage = this.message.replace(formatRegExp, function(match, index) {
    return flattenValues[parseInt(index, 10)];
  });
  return this.name + ": " + formattedMessage;
};
IntlError.prototype.error = function error() {
  var values = [], len = arguments.length;
  while (len--) values[len] = arguments[len];
  return new Error(this.formatMessage(values));
};
var flatten = function(arr) {
  return arr.reduce(function(a, b) {
    return a.concat(b);
  }, []);
};
var toIntlErrors = function(errors2) {
  var predicate = function(prev, name) {
    prev[name] = new IntlError({
      name,
      message: errors2[name]
    });
    return prev;
  };
  return Object.keys(errors2).reduce(predicate, {});
};
var errors = toIntlErrors(error_details_default);

// node_modules/@progress/kendo-intl/dist/es/cldr/info.js
function availableLocaleInfo(fullName, suffixes) {
  var parts = fullName.split("-");
  var language = parts[0];
  var script = parts[1];
  var territory = parts[2];
  return cldr[fullName] || suffixes.indexOf(territory) !== -1 && cldr[language + "-" + territory] || suffixes.indexOf(script) !== -1 && cldr[language + "-" + script] || cldr[language];
}
function localeFullName(language, suffixes) {
  var likelySubtags = cldr.supplemental.likelySubtags;
  for (var idx = 0; idx < suffixes.length; idx++) {
    var name = likelySubtags[language + "-" + suffixes[idx]];
    if (name) {
      return name;
    }
  }
  if (likelySubtags[language]) {
    return likelySubtags[language];
  }
}
var cldr = default_data_default;
function getLocaleInfo(locale) {
  var info;
  if (isString(locale)) {
    info = localeInfo(locale);
  } else {
    info = locale;
  }
  return info;
}
function localeInfo(locale) {
  if (cldr[locale]) {
    return cldr[locale];
  }
  var likelySubtags = cldr.supplemental.likelySubtags;
  if (likelySubtags) {
    var parts = locale.split("-");
    var language = parts[0];
    var suffixes = parts.slice(1);
    var fullName = localeFullName(language, suffixes);
    var info = fullName ? availableLocaleInfo(fullName, suffixes) : null;
    if (info) {
      return info;
    }
  }
  throw errors.NoLocale.error(locale);
}

// node_modules/@progress/kendo-intl/dist/es/common/constants.js
var DECIMAL = "decimal";
var CURRENCY = "currency";
var ACCOUNTING = "accounting";
var PERCENT = "percent";
var SCIENTIFIC = "scientific";
var CURRENCY_PLACEHOLDER = "$";
var PERCENT_PLACEHOLDER = "%";
var NUMBER_PLACEHOLDER = "n";
var LIST_SEPARATOR = ";";
var GROUP_SEPARATOR = ",";
var POINT = ".";
var EMPTY = "";
var DEFAULT_LOCALE = "en";

// node_modules/@progress/kendo-intl/dist/es/cldr/load-numbers.js
var LATIN_NUMBER_FORMATS = "Formats-numberSystem-latn";
var LATIN_NUMBER_SYMBOLS = "symbols-numberSystem-latn";
var patternRegExp = /([#,0.]+)/g;
var cldrCurrencyRegExp = /¤/g;
function getPatterns(pattern) {
  patternRegExp.lastIndex = 0;
  return pattern.replace(cldrCurrencyRegExp, CURRENCY_PLACEHOLDER).replace(patternRegExp, NUMBER_PLACEHOLDER).split(LIST_SEPARATOR);
}
function getGroupSize(pattern) {
  patternRegExp.lastIndex = 0;
  var numberPatterns = patternRegExp.exec(pattern.split(LIST_SEPARATOR)[0])[0].split(POINT);
  var integer = numberPatterns[0];
  var groupSize = integer.split(GROUP_SEPARATOR).slice(1).map(function(group) {
    return group.length;
  }).reverse();
  return groupSize;
}
function loadCurrencyUnitPatterns(currencyInfo, currencyFormats) {
  for (var field in currencyFormats) {
    if (field.startsWith("unitPattern")) {
      currencyInfo[field] = currencyFormats[field].replace("{0}", NUMBER_PLACEHOLDER).replace("{1}", CURRENCY_PLACEHOLDER);
    }
  }
}
function loadNumbersInfo(locale, info) {
  var localeInfo2 = cldr[locale];
  var numbers = localeInfo2.numbers = localeInfo2.numbers || {};
  numbers.symbols = numbers.symbols || {};
  for (var field in info) {
    if (field === LATIN_NUMBER_SYMBOLS) {
      Object.assign(numbers.symbols, info[field]);
    } else if (field.includes(LATIN_NUMBER_FORMATS)) {
      var style = field.substr(0, field.indexOf(LATIN_NUMBER_FORMATS));
      var pattern = info[field].standard;
      numbers[style] = {
        patterns: getPatterns(pattern)
      };
      if (style === CURRENCY) {
        numbers[style].groupSize = getGroupSize((info[DECIMAL + LATIN_NUMBER_FORMATS] || info[field]).standard);
        loadCurrencyUnitPatterns(numbers[style], info[field]);
        numbers[ACCOUNTING] = {
          patterns: getPatterns(info[field][ACCOUNTING]),
          groupSize: numbers[style].groupSize
        };
      } else {
        numbers[style].groupSize = getGroupSize(pattern);
      }
    } else if (field === "currencies") {
      numbers.currencies = info[field];
    }
  }
}

// node_modules/@progress/kendo-intl/dist/es/cldr/load-dates.js
var predefinedDatePatterns = {
  s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
  u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
};
var YEAR_REGEX = /y+/g;
var SHORT_DATE = [["dateFormats", "short"]];
var datePatterns = {
  D: [["dateFormats", "full"]],
  m: [["dateTimeFormats", "availableFormats", "MMMd"]],
  M: [["dateTimeFormats", "availableFormats", "MMMMd"]],
  y: [["dateTimeFormats", "availableFormats", "yMMM"]],
  Y: [["dateTimeFormats", "availableFormats", "yMMMM"]],
  F: [["dateFormats", "full"], ["timeFormats", "medium"]],
  g: [["dateTimeFormats", "availableFormats", "yMd"], ["timeFormats", "short"]],
  G: [["dateTimeFormats", "availableFormats", "yMd"], ["timeFormats", "medium"]],
  t: [["timeFormats", "short"]],
  T: [["timeFormats", "medium"]]
};
function toArray(obj) {
  var result = [];
  var names = Object.getOwnPropertyNames(obj);
  for (var idx = 0; idx < names.length; idx++) {
    var value = obj[names[idx]];
    result.push(value);
  }
  return result;
}
function getCalendarNames(info, isObj) {
  var result = {};
  for (var formatType in info) {
    var names = result[formatType] = {};
    for (var format3 in info[formatType]) {
      var formats = info[formatType][format3];
      names[format3] = isObj ? formats : toArray(formats);
    }
  }
  return result;
}
function getEraNames(eras) {
  var result = {};
  var format3 = result.format = {};
  var eraNameMap = {
    eraAbbr: "abbreviated",
    eraNames: "wide",
    eraNarrow: "narrow"
  };
  for (var eraFormatName in eras) {
    var formatName = eraNameMap[eraFormatName];
    format3[formatName] = eras[eraFormatName];
  }
  return result;
}
function loadCalendarNames(locale, calendar) {
  var localeCalendar = cldr[locale].calendar;
  localeCalendar.days = getCalendarNames(calendar.days);
  localeCalendar.months = getCalendarNames(calendar.months);
  localeCalendar.quarters = getCalendarNames(calendar.quarters);
  localeCalendar.dayPeriods = getCalendarNames(calendar.dayPeriods, true);
  localeCalendar.eras = getEraNames(calendar.eras);
}
function loadCalendarDateFields(locale, fields) {
  var localeCalendar = cldr[locale].calendar;
  var dateFields = {};
  for (var field in fields) {
    var ref = field.split("-");
    var fieldName = ref[0];
    var formatType = ref[1];
    if (formatType === void 0) formatType = "wide";
    var fieldInfo = dateFields[fieldName] || {};
    var displayName = fields[field].displayName;
    if (!displayName) {
      continue;
    }
    fieldInfo[formatType] = displayName;
    dateFields[fieldName] = fieldInfo;
  }
  localeCalendar.dateFields = dateFields;
}
function getPredefinedFormat(paths, calendar) {
  var result = [];
  for (var pathIdx = 0; pathIdx < paths.length; pathIdx++) {
    var fields = paths[pathIdx];
    var pattern = calendar;
    for (var idx = 0; idx < fields.length; idx++) {
      pattern = pattern[fields[idx]];
    }
    result.push(pattern);
  }
  return result.join(" ");
}
function loadCalendarPatterns(locale, calendar) {
  var cldrCalendar = cldr[locale].calendar;
  var patterns = cldrCalendar.patterns = {};
  patterns.d = getPredefinedFormat(SHORT_DATE, calendar).replace(YEAR_REGEX, "y");
  for (var pattern in datePatterns) {
    patterns[pattern] = getPredefinedFormat(datePatterns[pattern], calendar);
  }
  for (var pattern$1 in predefinedDatePatterns) {
    patterns[pattern$1] = predefinedDatePatterns[pattern$1];
  }
  var dateTimeFormats = calendar.dateTimeFormats;
  cldrCalendar.dateTimeFormats = {
    full: dateTimeFormats.full,
    long: dateTimeFormats.long,
    medium: dateTimeFormats.medium,
    short: dateTimeFormats.short,
    availableFormats: dateTimeFormats.availableFormats
  };
  cldrCalendar.timeFormats = calendar.timeFormats;
  cldrCalendar.dateFormats = calendar.dateFormats;
}
function loadCalendarInfo(locale, info) {
  var calendar = cldr[locale].calendar = cldr[locale].calendar || {};
  for (var field in info) {
    if (field === "timeZoneNames") {
      calendar.gmtFormat = info[field].gmtFormat;
      calendar.gmtZeroFormat = info[field].gmtZeroFormat;
    } else if (field === "calendars" && info[field].gregorian) {
      loadCalendarPatterns(locale, info[field].gregorian);
      loadCalendarNames(locale, info[field].gregorian);
    } else if (field === "fields") {
      loadCalendarDateFields(locale, info.fields);
    }
  }
}

// node_modules/@progress/kendo-intl/dist/es/cldr/territory.js
function territoryFromName(name, identity) {
  var likelySubtags = cldr.supplemental.likelySubtags;
  var parts = name.split("-");
  if (likelySubtags) {
    var likelyName = likelySubtags[name] || likelySubtags[parts[0]];
    if (likelyName) {
      parts = likelyName.split("-");
    }
  }
  if (identity) {
    for (var idx = parts.length - 1; idx >= 1; idx--) {
      var part = parts[idx];
      if (part === identity.variant || part === identity.script) {
        parts.splice(idx, 1);
      }
    }
  }
  var length = parts.length;
  if (length > 1) {
    var territory = parts[length - 1];
    return territory.toUpperCase();
  }
}
function localeTerritory(info) {
  if (info.territory) {
    return info.territory;
  }
  var name = info.name;
  var identity = info.identity;
  var territory;
  if (identity && identity.territory) {
    territory = identity.territory;
  } else {
    territory = territoryFromName(name, identity);
  }
  info.territory = territory;
  return territory;
}

// node_modules/@progress/kendo-intl/dist/es/cldr/load-units.js
var MILLISECOND = "duration-millisecond";
var UNIT_PATTERN_ONE = "unitPattern-count-one";
var UNIT_PATTERN_OTHER = "unitPattern-count-other";
var placeholderPattern = /\{0\}\s?/;
function extractUnit(unit) {
  var value = unit[UNIT_PATTERN_ONE] || unit[UNIT_PATTERN_OTHER];
  return value.replace(placeholderPattern, "");
}
function loadUnits(localeInfo2, units) {
  localeInfo2.calendar.dateFields.millisecond = {
    narrow: extractUnit(units.narrow[MILLISECOND]),
    short: extractUnit(units.short[MILLISECOND]),
    wide: extractUnit(units.long[MILLISECOND])
  };
}

// node_modules/@progress/kendo-intl/dist/es/cldr/load.js
function loadLocale(locale, info) {
  for (var field in info) {
    if (field === "numbers") {
      loadNumbersInfo(locale, info[field]);
    } else if (field === "dates") {
      loadCalendarInfo(locale, info[field]);
    }
  }
}
function load() {
  var arguments$1 = arguments;
  var length = arguments.length;
  for (var idx = 0; idx < length; idx++) {
    var entry = arguments$1[idx];
    if (entry.main) {
      var locale = Object.keys(entry.main)[0];
      var info = entry.main[locale];
      var localeInfo2 = cldr[locale] = cldr[locale] || {};
      if (info.units) {
        loadUnits(localeInfo2, info.units);
      } else {
        localeInfo2.name = localeInfo2.name || locale;
        localeInfo2.identity = localeInfo2.identity || info.identity;
        localeTerritory(localeInfo2);
        loadLocale(locale, info);
      }
    } else if (entry.supplemental) {
      if (entry.supplemental.weekData) {
        cldr.supplemental.weekData = {
          firstDay: entry.supplemental.weekData.firstDay,
          weekendStart: entry.supplemental.weekData.weekendStart,
          weekendEnd: entry.supplemental.weekData.weekendEnd
        };
      } else if (entry.supplemental.likelySubtags) {
        cldr.supplemental.likelySubtags = Object.assign(cldr.supplemental.likelySubtags, entry.supplemental.likelySubtags);
      } else if (entry.supplemental.currencyData) {
        var currencyData = cldr.supplemental.currencyData;
        currencyData.region = Object.assign(currencyData.region || {}, entry.supplemental.currencyData.region);
        currencyData.fractions = Object.assign(currencyData.fractions || {}, entry.supplemental.currencyData.fractions);
      }
    }
  }
}

// node_modules/@progress/kendo-intl/dist/es/cldr/date-field-name.js
function dateFieldName(options, locale) {
  if (locale === void 0) locale = DEFAULT_LOCALE;
  var info = localeInfo(locale);
  var dateFields = info.calendar.dateFields;
  if (!dateFields) {
    throw errors.NoDateFieldNames.error();
  }
  var fieldNameInfo = dateFields[options.type] || {};
  return fieldNameInfo[options.nameType] || fieldNameInfo["wide"];
}

// node_modules/@progress/kendo-intl/dist/es/cldr/date-format-names.js
function lowerArray(arr) {
  var result = [];
  for (var idx = 0; idx < arr.length; idx++) {
    result.push(arr[idx].toLowerCase());
  }
  return result;
}
function lowerObject(obj) {
  var result = {};
  for (var field in obj) {
    result[field] = obj[field].toLowerCase();
  }
  return result;
}
function cloneLower(obj) {
  var result = Array.isArray(obj) ? lowerArray(obj) : lowerObject(obj);
  return result;
}
function dateFormatNames(locale, options) {
  var type = options.type;
  var nameType = options.nameType;
  var standAlone = options.standAlone;
  var lower = options.lower;
  var info = getLocaleInfo(locale);
  var formatType = standAlone ? "stand-alone" : "format";
  var lowerNameType = (lower ? "lower-" : EMPTY) + nameType;
  var formatNames2 = info.calendar[type][formatType];
  var result = formatNames2[lowerNameType];
  if (!result && lower) {
    result = formatNames2[lowerNameType] = cloneLower(formatNames2[nameType]);
  }
  return result;
}

// node_modules/@progress/kendo-intl/dist/es/cldr/parse-range-date.js
function parseRangeDate(value) {
  var parts = value.split("-");
  var year = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10) - 1;
  var day = parseInt(parts[2], 10);
  return new Date(year, month, day);
}

// node_modules/@progress/kendo-intl/dist/es/cldr/currency.js
var NoCurrency = errors.NoCurrency;
var NoCurrencyDisplay = errors.NoCurrencyDisplay;
var NoSupplementalCurrency = errors.NoSupplementalCurrency;
var NoCurrencyRegion = errors.NoCurrencyRegion;
var NoValidCurrency = errors.NoValidCurrency;
var DEFAULT_CURRENCY_FRACTIONS = 2;
var SYMBOL = "symbol";
var INVALID_CURRENCY_CODE = "XXX";
var GLOBAL_CURRENCIES = {
  "001": "USD",
  // 001 refers to world. not sure if it is correct to assume USD but seems better than throw an error
  "150": "EUR"
  // 150 territory for Europe
};
function getCurrencyInfo(locale, currency, throwIfNoValid) {
  var info = getLocaleInfo(locale);
  var currencies = info.numbers.currencies;
  if (!currencies) {
    if (throwIfNoValid) {
      throw NoCurrency.error();
    }
    return;
  }
  var currencyDisplayInfo = currencies[currency];
  if (!currencyDisplayInfo) {
    if (throwIfNoValid) {
      throw NoCurrencyDisplay.error();
    }
    return;
  }
  return currencyDisplayInfo;
}
function lengthComparer(a, b) {
  return b.length - a.length;
}
function regionCurrency(regionCurrencies) {
  var latestValidUntil, latestValidUntilRange;
  var latestStillValid, latestStillValidDate;
  for (var idx = 0; idx < regionCurrencies.length; idx++) {
    var currency = regionCurrencies[idx];
    var code = Object.keys(currency)[0];
    var info = currency[code];
    if (code !== INVALID_CURRENCY_CODE && info._tender !== "false" && info._from) {
      if (!info._to) {
        var stillValidDate = parseRangeDate(info._from);
        if (!latestStillValidDate || latestStillValidDate < stillValidDate) {
          latestStillValid = code;
          latestStillValidDate = stillValidDate;
        }
      } else if (!latestStillValid) {
        var validFrom = parseRangeDate(info._from);
        var validTo = parseRangeDate(info._to);
        if (!latestValidUntilRange || latestValidUntilRange.to < validTo || latestValidUntilRange.from < validFrom) {
          latestValidUntil = code;
          latestValidUntilRange = {
            from: validFrom,
            to: validTo
          };
        }
      }
    }
  }
  return latestStillValid || latestValidUntil;
}
function currencyDisplays(locale, currency, throwIfNoValid) {
  if (throwIfNoValid === void 0) throwIfNoValid = true;
  var currencyInfo = getCurrencyInfo(locale, currency, throwIfNoValid);
  if (!currencyInfo) {
    return;
  }
  if (!currencyInfo.displays) {
    var displays = [currency];
    for (var field in currencyInfo) {
      displays.push(currencyInfo[field]);
    }
    displays.sort(lengthComparer);
    currencyInfo.displays = displays;
  }
  return currencyInfo.displays;
}
function currencyDisplay(locale, options) {
  var value = options.value;
  var currency = options.currency;
  var currencyDisplay2 = options.currencyDisplay;
  if (currencyDisplay2 === void 0) currencyDisplay2 = SYMBOL;
  if (currencyDisplay2 === "code") {
    return currency;
  }
  var currencyInfo = getCurrencyInfo(locale, currency, true);
  var result;
  if (currencyDisplay2 === SYMBOL) {
    result = currencyInfo["symbol-alt-narrow"] || currencyInfo[SYMBOL] || currency;
  } else {
    if (typeof value === "undefined" || value !== 1) {
      result = currencyInfo["displayName-count-other"];
    } else {
      result = currencyInfo["displayName-count-one"];
    }
  }
  return result;
}
function currencyFractionOptions(code) {
  var minimumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;
  var maximumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;
  var fractions = ((cldr.supplemental.currencyData || {}).fractions || {})[code];
  if (fractions && fractions._digits) {
    maximumFractionDigits = minimumFractionDigits = parseInt(fractions._digits, 10);
  }
  return {
    minimumFractionDigits,
    maximumFractionDigits
  };
}
function territoryCurrencyCode(territory, throwIfNoValid) {
  if (throwIfNoValid === void 0) throwIfNoValid = true;
  if (GLOBAL_CURRENCIES[territory]) {
    return GLOBAL_CURRENCIES[territory];
  }
  var currencyData = cldr.supplemental.currencyData;
  if (!currencyData) {
    if (throwIfNoValid) {
      throw NoSupplementalCurrency.error();
    }
    return;
  }
  var regionCurrencies = currencyData.region[territory];
  if (!regionCurrencies) {
    if (throwIfNoValid) {
      throw NoCurrencyRegion.error(territory);
    }
    return;
  }
  var currencyCode = regionCurrency(regionCurrencies);
  return currencyCode;
}
function localeCurrency(locale, throwIfNoValid) {
  var info = getLocaleInfo(locale);
  var numbers = info.numbers;
  if (!numbers.localeCurrency) {
    var currency = territoryCurrencyCode(localeTerritory(info), throwIfNoValid);
    if (!currency && throwIfNoValid) {
      throw NoValidCurrency.error(info.name);
    }
    numbers.localeCurrency = currency;
  }
  return numbers.localeCurrency;
}

// node_modules/@progress/kendo-intl/dist/es/cldr/constants.js
var DAYS_OF_WEEK = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var DEFAULT_TERRITORY = "001";

// node_modules/@progress/kendo-intl/dist/es/cldr/first-day.js
var NoWeekData = errors.NoWeekData;
var NoFirstDay = errors.NoFirstDay;
function firstDay(locale) {
  var info = getLocaleInfo(locale);
  if (!isNaN(info.firstDay)) {
    return info.firstDay;
  }
  var weekData = cldr.supplemental.weekData;
  if (!weekData) {
    throw NoWeekData.error();
  }
  var firstDay3 = weekData.firstDay[localeTerritory(info)] || weekData.firstDay[DEFAULT_TERRITORY];
  if (!firstDay3) {
    throw NoFirstDay.error();
  }
  info.firstDay = DAYS_OF_WEEK.indexOf(firstDay3);
  return info.firstDay;
}

// node_modules/@progress/kendo-intl/dist/es/cldr/weekend-range.js
var NoWeekData2 = errors.NoWeekData;
function weekendRange(locale) {
  var info = getLocaleInfo(locale);
  if (info.weekendRange) {
    return info.weekendRange;
  }
  var weekData = cldr.supplemental.weekData;
  if (!weekData) {
    throw NoWeekData2.error();
  }
  var territory = localeTerritory(info);
  var start = weekData.weekendStart[territory] || weekData.weekendStart[DEFAULT_TERRITORY];
  var end = weekData.weekendEnd[territory] || weekData.weekendEnd[DEFAULT_TERRITORY];
  info.weekendRange = {
    start: DAYS_OF_WEEK.indexOf(start),
    end: DAYS_OF_WEEK.indexOf(end)
  };
  return info.weekendRange;
}

// node_modules/@progress/kendo-intl/dist/es/cldr/number-symbols.js
function numberSymbols(locale) {
  var info = getLocaleInfo(locale);
  return info.numbers.symbols;
}

// node_modules/@progress/kendo-intl/dist/es/common/is-negative-zero.js
function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

// node_modules/@progress/kendo-intl/dist/es/numbers/format-currency-symbol.js
function formatCurrencySymbol(info, options) {
  if (options === void 0) options = {};
  if (!options.currency) {
    options.currency = localeCurrency(info, true);
  }
  var display = currencyDisplay(info, options);
  return display;
}

// node_modules/@progress/kendo-intl/dist/es/numbers/group-integer.js
function groupInteger(number, start, end, options, info) {
  var symbols = info.numbers.symbols;
  var decimalIndex = number.indexOf(symbols.decimal);
  var groupSizes = options.groupSize.slice();
  var groupSize = groupSizes.shift();
  var integerEnd = decimalIndex !== -1 ? decimalIndex : end + 1;
  var integer = number.substring(start, integerEnd);
  var result = number;
  var integerLength = integer.length;
  if (integerLength >= groupSize) {
    var idx = integerLength;
    var parts = [];
    while (idx > -1) {
      var value = integer.substring(idx - groupSize, idx);
      if (value) {
        parts.push(value);
      }
      idx -= groupSize;
      var newGroupSize = groupSizes.shift();
      groupSize = newGroupSize !== void 0 ? newGroupSize : groupSize;
      if (groupSize === 0) {
        value = integer.substring(0, idx);
        if (value) {
          parts.push(value);
        }
        break;
      }
    }
    integer = parts.reverse().join(symbols.group);
    result = number.substring(0, start) + integer + number.substring(integerEnd);
  }
  return result;
}

// node_modules/@progress/kendo-intl/dist/es/numbers/is-currency-style.js
function isCurrencyStyle(style) {
  return style === CURRENCY || style === ACCOUNTING;
}

// node_modules/@progress/kendo-intl/dist/es/common/pad.js
function pad(number, digits, right) {
  if (digits === void 0) digits = 2;
  if (right === void 0) right = false;
  var count = digits - String(number).length;
  var result = number;
  if (count > 0) {
    var padString = new Array(count + 1).join("0");
    result = right ? number + padString : padString + number;
  }
  return result;
}

// node_modules/@progress/kendo-intl/dist/es/common/round.js
var MAX_PRECISION = 20;
function round(value, precision) {
  var result = value;
  var decimals = precision || 0;
  result = result.toString().split("e");
  result = Math.round(Number(result[0] + "e" + (result[1] ? Number(result[1]) + decimals : decimals)));
  result = result.toString().split("e");
  result = Number(result[0] + "e" + (result[1] ? Number(result[1]) - decimals : -decimals));
  return result.toFixed(Math.min(decimals, MAX_PRECISION));
}

// node_modules/@progress/kendo-intl/dist/es/numbers/standard-number-format.js
var DEFAULT_DECIMAL_ROUNDING = 3;
var DEFAULT_PERCENT_ROUNDING = 0;
var trailingZeroRegex = /0+$/;
function fractionOptions(options) {
  var minimumFractionDigits = options.minimumFractionDigits;
  var maximumFractionDigits = options.maximumFractionDigits;
  var style = options.style;
  var isCurrency = isCurrencyStyle(style);
  var currencyFractions;
  if (isCurrency) {
    currencyFractions = currencyFractionOptions(options.currency);
  }
  if (minimumFractionDigits === void 0) {
    minimumFractionDigits = isCurrency ? currencyFractions.minimumFractionDigits : 0;
  }
  if (maximumFractionDigits === void 0) {
    if (style === PERCENT) {
      maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_PERCENT_ROUNDING);
    } else if (isCurrency) {
      maximumFractionDigits = Math.max(minimumFractionDigits, currencyFractions.maximumFractionDigits);
    } else {
      maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_DECIMAL_ROUNDING);
    }
  }
  return {
    minimumFractionDigits,
    maximumFractionDigits
  };
}
function applyPattern(value, pattern, symbol) {
  var result = EMPTY;
  for (var idx = 0, length = pattern.length; idx < length; idx++) {
    var ch = pattern.charAt(idx);
    if (ch === NUMBER_PLACEHOLDER) {
      result += value;
    } else if (ch === CURRENCY_PLACEHOLDER || ch === PERCENT_PLACEHOLDER) {
      result += symbol;
    } else {
      result += ch;
    }
  }
  return result;
}
function currencyUnitPattern(info, value) {
  var currencyInfo = info.numbers.currency;
  var pattern = value !== 1 ? currencyInfo["unitPattern-count-other"] : currencyInfo["unitPattern-count-one"];
  if (value < 0) {
    pattern = pattern.replace(NUMBER_PLACEHOLDER, "-" + NUMBER_PLACEHOLDER);
  }
  return pattern;
}
function standardNumberFormat(number, options, info) {
  var symbols = info.numbers.symbols;
  var style = options.style;
  var isCurrency = isCurrencyStyle(style);
  if (style === SCIENTIFIC) {
    var exponential = options.minimumFractionDigits !== void 0 ? number.toExponential(options.minimumFractionDigits) : number.toExponential();
    return exponential.replace(POINT, symbols.decimal);
  }
  var value = number;
  var symbol;
  if (isCurrency) {
    options.value = value;
    symbol = formatCurrencySymbol(info, options);
  }
  if (style === PERCENT) {
    value *= 100;
    symbol = symbols.percentSign;
  }
  var ref = fractionOptions(options);
  var minimumFractionDigits = ref.minimumFractionDigits;
  var maximumFractionDigits = ref.maximumFractionDigits;
  value = round(value, maximumFractionDigits);
  var negative = value < 0;
  var negativeZero = isNegativeZero(number);
  var parts = value.split(POINT);
  var integer = parts[0];
  var fraction = pad(parts[1] ? parts[1].replace(trailingZeroRegex, EMPTY) : EMPTY, minimumFractionDigits, true);
  if (negative) {
    integer = integer.substring(1);
  }
  if (options.minimumIntegerDigits) {
    integer = pad(integer, options.minimumIntegerDigits);
  }
  var formattedValue = options.useGrouping !== false ? groupInteger(integer, 0, integer.length, options, info) : integer;
  if (fraction) {
    formattedValue += symbols.decimal + fraction;
  }
  var pattern;
  if (isCurrency && options.currencyDisplay === "name") {
    pattern = currencyUnitPattern(info, number);
  } else {
    var patterns = options.patterns;
    pattern = negative || negativeZero ? patterns[1] || "-" + patterns[0] : patterns[0];
  }
  if (pattern === NUMBER_PLACEHOLDER && !negative) {
    return formattedValue;
  }
  var result = applyPattern(formattedValue, pattern, symbol);
  return result;
}

// node_modules/@progress/kendo-intl/dist/es/numbers/utils.js
var literalRegExp = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g;
var PLACEHOLDER = "__??__";
function setStyleOptions(formatOptions2, info) {
  var format3 = formatOptions2.format;
  if (format3.indexOf(PERCENT_PLACEHOLDER) !== -1) {
    formatOptions2.style = PERCENT;
    formatOptions2.symbol = info.numbers.symbols.percentSign;
    formatOptions2.number *= 100;
  }
  if (format3.indexOf(CURRENCY_PLACEHOLDER) !== -1) {
    formatOptions2.style = CURRENCY;
    formatOptions2.symbol = formatCurrencySymbol(info);
  }
}
function setFormatLiterals(formatOptions2) {
  var format3 = formatOptions2.format;
  if (format3.indexOf("'") > -1 || format3.indexOf('"') > -1 || format3.indexOf("\\") > -1) {
    var literals = formatOptions2.literals = [];
    formatOptions2.format = format3.replace(literalRegExp, function(match) {
      var quoteChar = match.charAt(0).replace("\\", EMPTY);
      var literal = match.slice(1).replace(quoteChar, EMPTY);
      literals.push(literal);
      return PLACEHOLDER;
    });
  }
}
function replaceLiterals(number, literals) {
  var result = number;
  if (literals) {
    var length = literals.length;
    for (var idx = 0; idx < length; idx++) {
      result = result.replace(PLACEHOLDER, literals[idx]);
    }
  }
  return result;
}

// node_modules/@progress/kendo-intl/dist/es/numbers/custom-number-format.js
var SHARP = "#";
var ZERO = "0";
var trailingZerosRegExp = /(\.(?:[0-9]*[1-9])?)0+$/g;
var trailingPointRegExp = /\.$/;
var commaRegExp = /,/g;
function trimTrailingZeros(value, lastZero) {
  var trimRegex;
  if (lastZero === 0) {
    trimRegex = trailingZerosRegExp;
  } else {
    trimRegex = new RegExp("(\\.[0-9]{" + lastZero + "}[1-9]*)0+$", "g");
  }
  return value.replace(trimRegex, "$1").replace(trailingPointRegExp, EMPTY);
}
function roundNumber(formatOptions2) {
  var number = formatOptions2.number;
  var format3 = formatOptions2.format;
  var decimalIndex = format3.indexOf(POINT);
  if (decimalIndex !== -1) {
    var zeroIndex = format3.lastIndexOf(ZERO) - decimalIndex;
    var sharpIndex = format3.lastIndexOf(SHARP) - decimalIndex;
    var hasZero = zeroIndex > -1;
    var hasSharp = sharpIndex > -1;
    var fraction = number.toString().split("e");
    if (fraction[1]) {
      fraction = round(number, Math.abs(fraction[1]));
    } else {
      fraction = fraction[0];
    }
    fraction = fraction.split(POINT)[1] || EMPTY;
    var precision = fraction.length;
    var trailingZeros = -1;
    if (!hasZero && !hasSharp) {
      formatOptions2.format = format3.substring(0, decimalIndex) + format3.substring(decimalIndex + 1);
      decimalIndex = -1;
      precision = 0;
    } else if (hasZero && zeroIndex > sharpIndex) {
      precision = zeroIndex;
    } else if (sharpIndex > zeroIndex) {
      if (hasSharp && precision > sharpIndex) {
        precision = sharpIndex;
      } else if (hasZero && precision < zeroIndex) {
        precision = zeroIndex;
      }
      trailingZeros = hasZero ? zeroIndex : 0;
    }
    if (precision > -1) {
      number = round(number, precision);
      if (trailingZeros > -1) {
        number = trimTrailingZeros(number, trailingZeros);
      }
    }
  } else {
    number = round(number);
  }
  if (formatOptions2.negative && number * -1 >= 0 && !formatOptions2.negativeZero) {
    formatOptions2.negative = false;
  }
  formatOptions2.number = number;
  formatOptions2.decimalIndex = decimalIndex;
}
function isConstantFormat(format3) {
  return format3.indexOf(SHARP) === -1 && format3.indexOf(ZERO) === -1;
}
function setValueSpecificFormat(formatOptions2) {
  var number = formatOptions2.number;
  var format3 = formatOptions2.format;
  format3 = format3.split(LIST_SEPARATOR);
  if ((formatOptions2.negative || formatOptions2.negativeZero) && format3[1]) {
    format3 = format3[1];
    formatOptions2.hasNegativeFormat = true;
  } else if (number === 0) {
    var zeroFormat = format3[2];
    format3 = zeroFormat || format3[0];
    if (zeroFormat && isConstantFormat(zeroFormat)) {
      formatOptions2.constant = zeroFormat;
    }
  } else {
    format3 = format3[0];
  }
  formatOptions2.format = format3;
}
function setGroupOptions(formatOptions2) {
  formatOptions2.hasGroup = formatOptions2.format.indexOf(GROUP_SEPARATOR) > -1;
  if (formatOptions2.hasGroup) {
    formatOptions2.format = formatOptions2.format.replace(commaRegExp, EMPTY);
  }
}
function placeholderIndex(index1, index2, start) {
  var index;
  if (index1 === -1 && index2 !== -1) {
    index = index2;
  } else if (index1 !== -1 && index2 === -1) {
    index = index1;
  } else {
    index = start ? Math.min(index1, index2) : Math.max(index1, index2);
  }
  return index;
}
function setPlaceholderIndices(formatOptions2) {
  var format3 = formatOptions2.format;
  var sharpIndex = format3.indexOf(SHARP);
  var zeroIndex = format3.indexOf(ZERO);
  var start = placeholderIndex(sharpIndex, zeroIndex, true);
  sharpIndex = format3.lastIndexOf(SHARP);
  zeroIndex = format3.lastIndexOf(ZERO);
  var end = placeholderIndex(sharpIndex, zeroIndex);
  if (start === format3.length) {
    end = start;
  }
  formatOptions2.start = start;
  formatOptions2.end = end;
  formatOptions2.lastZeroIndex = zeroIndex;
}
function replaceStyleSymbols(number, style, symbol) {
  var result = number;
  if (style === CURRENCY || style === PERCENT) {
    result = EMPTY;
    for (var idx = 0, length = number.length; idx < length; idx++) {
      var ch = number.charAt(idx);
      result += ch === CURRENCY_PLACEHOLDER || ch === PERCENT_PLACEHOLDER ? symbol : ch;
    }
  }
  return result;
}
function replacePlaceHolders(formatOptions2, info) {
  var start = formatOptions2.start;
  var end = formatOptions2.end;
  var negative = formatOptions2.negative;
  var negativeZero = formatOptions2.negativeZero;
  var format3 = formatOptions2.format;
  var decimalIndex = formatOptions2.decimalIndex;
  var lastZeroIndex = formatOptions2.lastZeroIndex;
  var hasNegativeFormat = formatOptions2.hasNegativeFormat;
  var hasGroup = formatOptions2.hasGroup;
  var number = formatOptions2.number;
  var value = number.toString().split(POINT);
  var length = format3.length;
  var integer = value[0];
  var fraction = value[1] || EMPTY;
  var integerLength = integer.length;
  var replacement = EMPTY;
  number = format3.substring(0, start);
  if ((negative || negativeZero) && !hasNegativeFormat) {
    number += "-";
  }
  for (var idx = start; idx < length; idx++) {
    var ch = format3.charAt(idx);
    if (decimalIndex === -1) {
      if (end - idx < integerLength) {
        number += integer;
        break;
      }
    } else {
      if (lastZeroIndex !== -1 && lastZeroIndex < idx) {
        replacement = EMPTY;
      }
      if (decimalIndex - idx <= integerLength && decimalIndex - idx > -1) {
        number += integer;
        idx = decimalIndex;
      }
      if (decimalIndex === idx) {
        number += (fraction ? info.numbers.symbols.decimal : EMPTY) + fraction;
        idx += end - decimalIndex + 1;
        continue;
      }
    }
    if (ch === ZERO) {
      number += ch;
      replacement = ch;
    } else if (ch === SHARP) {
      number += replacement;
    }
  }
  if (hasGroup) {
    number = groupInteger(number, start + (negative && !hasNegativeFormat ? 1 : 0), Math.max(end, integerLength + start), info.numbers.decimal, info);
  }
  if (end >= start) {
    number += format3.substring(end + 1);
  }
  return number;
}
function applyCustomFormat(formatOptions2, info) {
  var number = formatOptions2.number;
  if (formatOptions2.start !== -1) {
    number = replacePlaceHolders(formatOptions2, info);
    number = replaceStyleSymbols(number, formatOptions2.style, formatOptions2.symbol);
    number = replaceLiterals(number, formatOptions2.literals);
  }
  return number;
}
function customNumberFormat(number, format3, info) {
  var formatOptions2 = {
    negative: number < 0,
    number: Math.abs(number),
    negativeZero: isNegativeZero(number),
    format: format3
  };
  setValueSpecificFormat(formatOptions2);
  if (formatOptions2.constant) {
    return formatOptions2.constant;
  }
  setFormatLiterals(formatOptions2);
  setStyleOptions(formatOptions2, info);
  setGroupOptions(formatOptions2);
  roundNumber(formatOptions2);
  setPlaceholderIndices(formatOptions2);
  return applyCustomFormat(formatOptions2, info);
}

// node_modules/@progress/kendo-intl/dist/es/numbers/format-options.js
var standardFormatRegExp = /^(n|c|p|e|a)(\d*)$/i;
function standardFormatOptions(format3) {
  var formatAndPrecision = standardFormatRegExp.exec(format3);
  if (formatAndPrecision) {
    var options = {
      style: DECIMAL
    };
    var style = formatAndPrecision[1].toLowerCase();
    if (style === "c") {
      options.style = CURRENCY;
    } else if (style === "a") {
      options.style = ACCOUNTING;
    } else if (style === "p") {
      options.style = PERCENT;
    } else if (style === "e") {
      options.style = SCIENTIFIC;
    }
    if (formatAndPrecision[2]) {
      options.minimumFractionDigits = options.maximumFractionDigits = parseInt(formatAndPrecision[2], 10);
    }
    return options;
  }
}
function formatOptions(format3) {
  var options;
  if (isString(format3)) {
    options = standardFormatOptions(format3);
  } else {
    options = format3;
  }
  return options;
}

// node_modules/@progress/kendo-intl/dist/es/numbers/format-number.js
function formatNumber(number, format3, locale) {
  if (format3 === void 0) format3 = NUMBER_PLACEHOLDER;
  if (locale === void 0) locale = DEFAULT_LOCALE;
  if (number === void 0 || number === null) {
    return EMPTY;
  }
  if (!isFinite(number)) {
    return String(number);
  }
  var info = localeInfo(locale);
  var options = formatOptions(format3);
  var result;
  if (options) {
    var style = options.style || DECIMAL;
    result = standardNumberFormat(number, Object.assign({}, info.numbers[style], options), info);
  } else {
    result = customNumberFormat(number, format3, info);
  }
  return result;
}

// node_modules/@progress/kendo-intl/dist/es/common/is-number.js
function isNumber(value) {
  return typeof value === "number";
}

// node_modules/@progress/kendo-intl/dist/es/numbers/parse-number.js
var exponentRegExp = /[eE][-+]?[0-9]+/;
var nonBreakingSpaceRegExp = /\u00A0/g;
function cleanNegativePattern(number, patterns) {
  if (patterns.length > 1) {
    var parts = (patterns[1] || EMPTY).replace(CURRENCY_PLACEHOLDER, EMPTY).split(NUMBER_PLACEHOLDER);
    if (number.indexOf(parts[0]) > -1 && number.indexOf(parts[1]) > -1) {
      return number.replace(parts[0], EMPTY).replace(parts[1], EMPTY);
    }
  }
}
function cleanCurrencyNumber(value, info, format3) {
  var options = formatOptions(format3) || {};
  var isCurrency = isCurrencyStyle(options.style);
  var number = value;
  var negative;
  var currency = options.currency || localeCurrency(info, isCurrency);
  if (currency) {
    var displays = currencyDisplays(info, currency, isCurrency);
    if (displays) {
      for (var idx = 0; idx < displays.length; idx++) {
        var display = displays[idx];
        if (number.includes(display)) {
          number = number.replace(display, EMPTY);
          isCurrency = true;
          break;
        }
      }
    }
    if (isCurrency) {
      var cleanNumber = cleanNegativePattern(number, info.numbers.currency.patterns) || cleanNegativePattern(number, info.numbers.accounting.patterns);
      if (cleanNumber) {
        negative = true;
        number = cleanNumber;
      }
    }
  }
  return {
    number,
    negative
  };
}
function cleanLiterals(number, formatOptions2) {
  var literals = formatOptions2.literals;
  var result = number;
  if (literals) {
    for (var idx = 0; idx < literals.length; idx++) {
      result = result.replace(literals[idx], EMPTY);
    }
  }
  return result;
}
function divideBy100(number) {
  var strNumber = String(number);
  var pointIndex = strNumber.indexOf(POINT);
  var zeroesCount = 2;
  var result = number / Math.pow(10, zeroesCount);
  if (pointIndex === -1 || String(result).length <= strNumber.length + zeroesCount) {
    return result;
  }
  var fractionDigits = strNumber.length - pointIndex + 1 + zeroesCount;
  return parseFloat(result.toFixed(fractionDigits));
}
function parseNumber(value, locale, format3) {
  if (locale === void 0) locale = DEFAULT_LOCALE;
  if (format3 === void 0) format3 = {};
  if (!value && value !== 0) {
    return null;
  }
  if (isNumber(value)) {
    return value;
  }
  var info = localeInfo(locale);
  var symbols = info.numbers.symbols;
  var number = value.toString();
  var formatOptions2 = format3 || {};
  var isPercent;
  if (isString(format3)) {
    formatOptions2 = {
      format: format3
    };
    setFormatLiterals(formatOptions2);
    number = cleanLiterals(number, formatOptions2);
    setStyleOptions(formatOptions2, info);
  }
  if (formatOptions2.style === PERCENT || number.indexOf(symbols.percentSign) > -1) {
    number = number.replace(symbols.percentSign, EMPTY);
    isPercent = true;
  }
  if (exponentRegExp.test(number)) {
    number = parseFloat(number.replace(symbols.decimal, POINT));
    return isNaN(number) ? null : number;
  }
  var ref = cleanCurrencyNumber(number, info, formatOptions2);
  var negativeCurrency = ref.negative;
  var currencyNumber = ref.number;
  number = String(currencyNumber).trim();
  var negativeSignIndex = number.indexOf("-");
  if (negativeSignIndex > 0) {
    return null;
  }
  var isNegative = negativeSignIndex > -1;
  isNegative = negativeCurrency !== void 0 ? negativeCurrency : isNegative;
  number = number.replace("-", EMPTY).replace(nonBreakingSpaceRegExp, " ").split(symbols.group.replace(nonBreakingSpaceRegExp, " ")).join(EMPTY).replace(symbols.decimal, POINT);
  number = parseFloat(number);
  if (isNaN(number)) {
    number = null;
  } else if (isNegative) {
    number *= -1;
  }
  if (number && isPercent) {
    number = divideBy100(number);
  }
  return number;
}

// node_modules/@progress/kendo-intl/dist/es/common/format-string.js
var formatRegExp2 = /\{(\d+)}/g;
function formatString(format3) {
  var values = arguments;
  return format3.replace(formatRegExp2, function(match, index) {
    var value = values[parseInt(index, 10) + 1];
    return value;
  });
}

// node_modules/@progress/kendo-intl/dist/es/dates/date-pattern.js
var REMOVAL_PENALTY = 120;
var ADDITION_PENALTY = 20;
var LENGHT_DELTA = [2, 1, 5, 3, 4];
var LONG_LESS_PENALTY_DELTA = -2;
var SHORT_LESS_PENALTY_DELTA = -1;
var SHORT_MORE_PENALTY_DELTA = 1;
var LONG_MORE_PENALTY_DELTA = 2;
var PENALTIES = {};
PENALTIES[LONG_LESS_PENALTY_DELTA.toString()] = 8;
PENALTIES[SHORT_LESS_PENALTY_DELTA.toString()] = 6;
PENALTIES[LONG_MORE_PENALTY_DELTA.toString()] = 6;
PENALTIES[SHORT_MORE_PENALTY_DELTA.toString()] = 3;
var VALUE_FORMAT_LENGTH = {
  numeric: 1,
  "2-digit": 2,
  short: 3,
  long: 4,
  narrow: 5
};
var TIME_SPECIFIERS_REGEX = /[hHmsSzZoOvVxX]/;
function getHourSpecifier(options) {
  return options.hour12 ? "h" : "H";
}
var DATE_OPTIONS_MAP = [{
  key: "era",
  specifier: "G"
}, {
  key: "year",
  specifier: "y"
}, {
  key: "month",
  specifier: "M"
}, {
  key: "day",
  specifier: "d"
}, {
  key: "weekday",
  specifier: "E"
}, {
  key: "hour",
  getSpecifier: getHourSpecifier
}, {
  key: "minute",
  specifier: "m"
}, {
  key: "second",
  specifier: "s"
}, {
  key: "timeZoneName",
  specifier: "z"
}];
var STAND_ALONE_SPECIFIERS = {
  e: "c",
  E: "c",
  M: "L",
  Q: "q"
};
var specifiersRegex = {};
var resolvedFormats = {};
function getSpecifierRegex(specifier) {
  if (!specifiersRegex[specifier]) {
    specifiersRegex[specifier] = new RegExp(specifier + "+");
  }
  return specifiersRegex[specifier];
}
function skeletonSpecifiers(skeleton) {
  var result = [];
  var current = skeleton.charAt(0);
  var specifier = current;
  for (var idx = 1; idx < skeleton.length; idx++) {
    var character = skeleton.charAt(idx);
    if (character === specifier) {
      current += character;
    } else {
      result.push(current);
      current = specifier = character;
    }
  }
  result.push(current);
  return result;
}
function findBestMatch(specifiers, availableFormats) {
  var specifiersLength = specifiers.length;
  var maxScore = -Number.MAX_VALUE;
  var bestMatches, result;
  for (var format3 in availableFormats) {
    var matches = [];
    var currentFormat = format3.replace("v", "z");
    var score = 0;
    for (var idx = 0; idx < specifiersLength; idx++) {
      var specifier = specifiers[idx];
      var specifierRegex = getSpecifierRegex(specifier[0]);
      var match = (specifierRegex.exec(currentFormat) || [])[0];
      if (!match) {
        score -= REMOVAL_PENALTY;
      } else {
        currentFormat = currentFormat.replace(match, EMPTY);
        if (match.length !== specifier.length) {
          var delta = Math.max(Math.min(LENGHT_DELTA[match.length] - LENGHT_DELTA[specifier.length], 2), -2);
          score -= PENALTIES[delta];
        }
      }
      matches.push(match);
      if (score < maxScore) {
        break;
      }
    }
    if (currentFormat.length) {
      score -= skeletonSpecifiers(currentFormat).length * ADDITION_PENALTY;
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatches = matches;
      result = availableFormats[format3];
    }
  }
  result = result.replace("v", "z");
  for (var idx$1 = 0; idx$1 < specifiersLength; idx$1++) {
    var bestMatch = bestMatches[idx$1];
    if (bestMatch && bestMatch !== specifiers[idx$1]) {
      var matchSpecifier = bestMatches[idx$1][0];
      result = result.replace(getSpecifierRegex(matchSpecifier), specifiers[idx$1]);
      if (STAND_ALONE_SPECIFIERS[matchSpecifier]) {
        result = result.replace(getSpecifierRegex(STAND_ALONE_SPECIFIERS[matchSpecifier]), specifiers[idx$1]);
      }
    }
  }
  return result;
}
function cacheFormat(skeleton, format3, locale) {
  if (!resolvedFormats[locale]) {
    resolvedFormats[locale] = {};
  }
  resolvedFormats[locale][skeleton] = format3;
}
function skeletonFormat(skeleton, info) {
  var availableFormats = info.calendar.dateTimeFormats.availableFormats;
  if (availableFormats[skeleton]) {
    return availableFormats[skeleton];
  }
  if (resolvedFormats[info.name] && resolvedFormats[info.name][skeleton]) {
    return resolvedFormats[info.name][skeleton];
  }
  var timeStartIndex = skeleton.search(TIME_SPECIFIERS_REGEX);
  var result;
  if (timeStartIndex > 0) {
    var dateSkeleton = skeleton.substr(0, timeStartIndex);
    var timeSkeleton = skeleton.substr(timeStartIndex);
    result = formatString(
      info.calendar.dateTimeFormats.short,
      //should be deterimed based on specifiers
      availableFormats[timeSkeleton] || findBestMatch(skeletonSpecifiers(timeSkeleton), availableFormats),
      availableFormats[dateSkeleton] || findBestMatch(skeletonSpecifiers(dateSkeleton), availableFormats)
    );
  } else {
    result = findBestMatch(skeletonSpecifiers(skeleton), availableFormats);
  }
  cacheFormat(skeleton, result, info.name);
  return result;
}
function skeletonFromOptions(options) {
  var result = [];
  for (var idx = 0; idx < DATE_OPTIONS_MAP.length; idx++) {
    var option = DATE_OPTIONS_MAP[idx];
    var field = option.key;
    var value = options[field];
    if (value) {
      var spcifier = option.specifier || option.getSpecifier(options);
      result.push(spcifier.repeat(VALUE_FORMAT_LENGTH[value]));
    }
  }
  return result.join(EMPTY);
}
function datePattern(format3, info) {
  var calendar = info.calendar;
  var result;
  if (isString(format3)) {
    if (calendar.patterns[format3]) {
      result = calendar.patterns[format3];
    } else {
      result = format3;
    }
  } else if (format3) {
    if (format3.pattern) {
      return format3.pattern;
    }
    var skeleton = format3.skeleton;
    if (!skeleton) {
      if (format3.datetime) {
        result = formatString(calendar.dateTimeFormats[format3.datetime], calendar.timeFormats[format3.datetime], calendar.dateFormats[format3.datetime]);
      } else if (format3.date) {
        result = calendar.dateFormats[format3.date];
      } else if (format3.time) {
        result = calendar.timeFormats[format3.time];
      } else {
        skeleton = skeletonFromOptions(format3);
      }
    }
    if (skeleton) {
      result = skeletonFormat(skeleton, info);
    }
  }
  if (!result) {
    result = calendar.patterns.d;
  }
  return result;
}

// node_modules/@progress/kendo-intl/dist/es/dates/date-name-type.js
function dateNameType(formatLength) {
  var nameType;
  if (formatLength <= 3) {
    nameType = "abbreviated";
  } else if (formatLength === 4) {
    nameType = "wide";
  } else if (formatLength === 5) {
    nameType = "narrow";
  } else if (formatLength === 6) {
    nameType = "short";
  }
  return nameType;
}

// node_modules/@progress/kendo-intl/dist/es/dates/format-names.js
function formatNames(locale, type, formatLength, standAlone, lower) {
  return dateFormatNames(locale, {
    type,
    nameType: dateNameType(formatLength),
    standAlone,
    lower
  });
}

// node_modules/@progress/kendo-intl/dist/es/common/is-date.js
function isFunction(fun) {
  return typeof fun === "function";
}
function isDate(value) {
  return Boolean(value) && isFunction(value.getTime) && isFunction(value.getMonth);
}

// node_modules/@progress/kendo-intl/dist/es/dates/constants.js
var MONTH = "month";
var HOUR = "hour";
var ZONE = "zone";
var WEEKDAY = "weekday";
var QUARTER = "quarter";
var DATE_FIELD_MAP = {
  "G": "era",
  "y": "year",
  "q": QUARTER,
  "Q": QUARTER,
  "M": MONTH,
  "L": MONTH,
  "d": "day",
  "E": WEEKDAY,
  "c": WEEKDAY,
  "e": WEEKDAY,
  "h": HOUR,
  "H": HOUR,
  "k": HOUR,
  "K": HOUR,
  "m": "minute",
  "s": "second",
  "S": "millisecond",
  "a": "dayperiod",
  "x": ZONE,
  "X": ZONE,
  "z": ZONE,
  "Z": ZONE
};
var dateFormatRegExp = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|k{1,2}|K{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;

// node_modules/@progress/kendo-intl/dist/es/dates/format-date.js
function formatDayOfWeekIndex(day, formatLength, localeInfo2) {
  var firstDayIndex = firstDay(localeInfo2);
  var dayIndex;
  if (day < firstDayIndex) {
    dayIndex = 7 - firstDayIndex + day;
  } else {
    dayIndex = day - firstDayIndex;
  }
  return dayIndex + 1;
}
function formatMonth(month, formatLength, info, standAlone) {
  if (formatLength <= 2) {
    return pad(month + 1, formatLength);
  }
  return formatNames(info, "months", formatLength, standAlone)[month];
}
function formatQuarter(date, formatLength, info, standAlone) {
  var quarter = Math.floor(date.getMonth() / 3);
  if (formatLength < 3) {
    return quarter + 1;
  }
  return formatNames(info, "quarters", formatLength, standAlone)[quarter];
}
function formatTimeZone(date, info, options) {
  var shortHours = options.shortHours;
  var optionalMinutes = options.optionalMinutes;
  var separator = options.separator;
  var localizedName = options.localizedName;
  var zZeroOffset = options.zZeroOffset;
  var offset = date.getTimezoneOffset() / 60;
  if (offset === 0 && zZeroOffset) {
    return "Z";
  }
  var sign = offset <= 0 ? "+" : "-";
  var hoursMinutes = Math.abs(offset).toString().split(".");
  var minutes = hoursMinutes[1] || 0;
  var result = sign + (shortHours ? hoursMinutes[0] : pad(hoursMinutes[0], 2));
  if (minutes || !optionalMinutes) {
    result += (separator ? ":" : EMPTY) + pad(minutes, 2);
  }
  if (localizedName) {
    var localizedFormat = offset === 0 ? info.calendar.gmtZeroFormat : info.calendar.gmtFormat;
    result = formatString(localizedFormat, result);
  }
  return result;
}
function formatDayOfWeek(date, formatLength, info, standAlone) {
  var result;
  if (formatLength < 3) {
    result = formatDayOfWeekIndex(date.getDay(), formatLength, info);
  } else {
    result = formatNames(info, "days", formatLength, standAlone)[date.getDay()];
  }
  return result;
}
var formatters = {};
formatters.d = function(date, formatLength) {
  return pad(date.getDate(), formatLength);
};
formatters.E = function(date, formatLength, info) {
  return formatNames(info, "days", formatLength)[date.getDay()];
};
formatters.M = function(date, formatLength, info) {
  return formatMonth(date.getMonth(), formatLength, info, false);
};
formatters.L = function(date, formatLength, info) {
  return formatMonth(date.getMonth(), formatLength, info, true);
};
formatters.y = function(date, formatLength) {
  var year = date.getFullYear();
  if (formatLength === 2) {
    year = year % 100;
  }
  return pad(year, formatLength);
};
formatters.h = function(date, formatLength) {
  var hours = date.getHours() % 12 || 12;
  return pad(hours, formatLength);
};
formatters.H = function(date, formatLength) {
  return pad(date.getHours(), formatLength);
};
formatters.k = function(date, formatLength) {
  return pad(date.getHours() || 24, formatLength);
};
formatters.K = function(date, formatLength) {
  return pad(date.getHours() % 12, formatLength);
};
formatters.m = function(date, formatLength) {
  return pad(date.getMinutes(), formatLength);
};
formatters.s = function(date, formatLength) {
  return pad(date.getSeconds(), formatLength);
};
formatters.S = function(date, formatLength) {
  var milliseconds = date.getMilliseconds();
  var result;
  if (milliseconds !== 0) {
    result = pad(String(milliseconds / 1e3).split(".")[1].substr(0, formatLength), formatLength, true);
  } else {
    result = pad(EMPTY, formatLength);
  }
  return result;
};
formatters.a = function(date, formatLength, info) {
  return formatNames(info, "dayPeriods", formatLength)[date.getHours() < 12 ? "am" : "pm"];
};
formatters.z = function(date, formatLength, info) {
  return formatTimeZone(date, info, {
    shortHours: formatLength < 4,
    optionalMinutes: formatLength < 4,
    separator: true,
    localizedName: true
  });
};
formatters.Z = function(date, formatLength, info) {
  return formatTimeZone(date, info, {
    separator: formatLength > 3,
    localizedName: formatLength === 4,
    zZeroOffset: formatLength === 5
  });
};
formatters.x = function(date, formatLength, info) {
  return formatTimeZone(date, info, {
    optionalMinutes: formatLength === 1,
    separator: formatLength === 3 || formatLength === 5
  });
};
formatters.X = function(date, formatLength, info) {
  return formatTimeZone(date, info, {
    optionalMinutes: formatLength === 1,
    separator: formatLength === 3 || formatLength === 5,
    zZeroOffset: true
  });
};
formatters.G = function(date, formatLength, info) {
  var era = date.getFullYear() >= 0 ? 1 : 0;
  return formatNames(info, "eras", formatLength)[era];
};
formatters.e = formatDayOfWeek;
formatters.c = function(date, formatLength, info) {
  return formatDayOfWeek(date, formatLength, info, true);
};
formatters.q = function(date, formatLength, info) {
  return formatQuarter(date, formatLength, info, true);
};
formatters.Q = formatQuarter;
function formatDate(date, format3, locale) {
  if (locale === void 0) locale = DEFAULT_LOCALE;
  if (!isDate(date)) {
    if (date === void 0 || date === null) {
      return EMPTY;
    }
    return date;
  }
  var info = localeInfo(locale);
  var pattern = datePattern(format3, info);
  return pattern.replace(dateFormatRegExp, function(match) {
    var formatLength = match.length;
    var result;
    if (match.includes("'") || match.includes('"')) {
      result = match.slice(1, formatLength - 1);
    } else {
      result = formatters[match[0]](date, formatLength, info);
    }
    return result;
  });
}

// node_modules/@progress/kendo-intl/dist/es/dates/time-utils.js
function convertTimeZone(date, fromOffset, toOffset) {
  var fromLocalOffset = date.getTimezoneOffset();
  var offsetDate = new Date(date.getTime() + (fromOffset - toOffset) * 6e4);
  var toLocalOffset = offsetDate.getTimezoneOffset();
  return new Date(offsetDate.getTime() + (toLocalOffset - fromLocalOffset) * 6e4);
}
function adjustDST(date, hours) {
  if (!hours && date.getHours() === 23) {
    date.setHours(date.getHours() + 2);
  }
}

// node_modules/@progress/kendo-intl/dist/es/dates/parse-date.js
var timeZoneOffsetRegExp = /([+|-]\d{1,2})(:?)(\d{2})?/;
var dateRegExp = /^\/Date\((.*?)\)\/$/;
var offsetRegExp = /[+-]\d*/;
var numberRegExp = {
  2: /^\d{1,2}/,
  3: /^\d{1,3}/,
  4: /^\d{4}/
};
var numberRegex = /\d+/;
var PLACEHOLDER2 = "{0}";
var leadingSpacesRegex = /^ */;
var trailingSpacesRegex = / *$/;
var standardDateFormats = ["yyyy/MM/dd HH:mm:ss", "yyyy/MM/dd HH:mm", "yyyy/MM/dd", "E MMM dd yyyy HH:mm:ss", "yyyy-MM-ddTHH:mm:ss.SSSSSSSXXX", "yyyy-MM-ddTHH:mm:ss.SSSXXX", "yyyy-MM-ddTHH:mm:ss.SSXXX", "yyyy-MM-ddTHH:mm:ssXXX", "yyyy-MM-ddTHH:mm:ss.SSSSSSS", "yyyy-MM-ddTHH:mm:ss.SSS", "yyyy-MM-ddTHH:mmXXX", "yyyy-MM-ddTHH:mmX", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mm", "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm", "yyyy-MM-dd", "HH:mm:ss", "HH:mm"];
var FORMATS_SEQUENCE = ["G", "g", "F", "Y", "y", "M", "m", "D", "d", "y", "T", "t"];
var TWO_DIGIT_YEAR_MAX = 2029;
function outOfRange(value, start, end) {
  return !(value >= start && value <= end);
}
function lookAhead(match, state) {
  var format3 = state.format;
  var idx = state.idx;
  var i = 0;
  while (format3[idx] === match) {
    i++;
    idx++;
  }
  if (i > 0) {
    idx -= 1;
  }
  state.idx = idx;
  return i;
}
function getNumber(size, state) {
  var regex = size ? numberRegExp[size] || new RegExp("^\\d{1," + size + "}") : numberRegex, match = state.value.substr(state.valueIdx, size).match(regex);
  if (match) {
    match = match[0];
    state.valueIdx += match.length;
    return parseInt(match, 10);
  }
  return null;
}
function getIndexByName(names, state, lower) {
  var i = 0, length = names.length, name, nameLength, matchLength = 0, matchIdx = 0, subValue;
  for (; i < length; i++) {
    name = names[i];
    nameLength = name.length;
    subValue = state.value.substr(state.valueIdx, nameLength);
    if (lower) {
      subValue = subValue.toLowerCase();
    }
    if (subValue === name && nameLength > matchLength) {
      matchLength = nameLength;
      matchIdx = i;
    }
  }
  if (matchLength) {
    state.valueIdx += matchLength;
    return matchIdx + 1;
  }
  return null;
}
function checkLiteral(state) {
  var result = false;
  if (state.value.charAt(state.valueIdx) === state.format[state.idx]) {
    state.valueIdx++;
    result = true;
  }
  return result;
}
function calendarGmtFormats(calendar) {
  var gmtFormat = calendar.gmtFormat;
  var gmtZeroFormat = calendar.gmtZeroFormat;
  if (!gmtFormat) {
    throw errors.NoGMTInfo.error();
  }
  return [gmtFormat.replace(PLACEHOLDER2, EMPTY).toLowerCase(), gmtZeroFormat.replace(PLACEHOLDER2, EMPTY).toLowerCase()];
}
function parseTimeZoneOffset(state, info, options) {
  var shortHours = options.shortHours;
  var noSeparator = options.noSeparator;
  var optionalMinutes = options.optionalMinutes;
  var localizedName = options.localizedName;
  var zLiteral = options.zLiteral;
  state.UTC = true;
  if (zLiteral && state.value.charAt(state.valueIdx) === "Z") {
    state.valueIdx++;
    return false;
  }
  if (localizedName && !getIndexByName(calendarGmtFormats(info.calendar), state, true)) {
    return true;
  }
  var matches = timeZoneOffsetRegExp.exec(state.value.substr(state.valueIdx, 6));
  if (!matches) {
    return !localizedName;
  }
  var hoursMatch = matches[1];
  var minutesMatch = matches[3];
  var hoursOffset = parseInt(hoursMatch, 10);
  var separator = matches[2];
  var minutesOffset = parseInt(minutesMatch, 10);
  if (isNaN(hoursOffset) || !shortHours && hoursMatch.length !== 3 || !optionalMinutes && isNaN(minutesOffset) || noSeparator && separator) {
    return true;
  }
  if (isNaN(minutesOffset)) {
    minutesOffset = null;
  }
  if (outOfRange(hoursOffset, -12, 13) || minutesOffset && outOfRange(minutesOffset, 0, 59)) {
    return true;
  }
  state.valueIdx += matches[0].length;
  state.hoursOffset = hoursOffset;
  state.minutesOffset = minutesOffset;
}
function parseMonth(ch, state, info) {
  var count = lookAhead(ch, state);
  var names = formatNames(info, "months", count, ch === "L", true);
  var month = count < 3 ? getNumber(2, state) : getIndexByName(names, state, true);
  if (month === null || outOfRange(month, 1, 12)) {
    return true;
  }
  state.month = month - 1;
}
function parseDayOfWeek(ch, state, info) {
  var count = lookAhead(ch, state);
  var names = formatNames(info, "days", count, ch === "c", true);
  var dayOfWeek = count < 3 ? getNumber(1, state) : getIndexByName(names, state, true);
  if (!dayOfWeek && dayOfWeek !== 0 || outOfRange(dayOfWeek, 1, 7)) {
    return true;
  }
}
var parsers = {};
parsers.d = function(state) {
  lookAhead("d", state);
  var day = getNumber(2, state);
  if (day === null || outOfRange(day, 1, 31)) {
    return true;
  }
  if (state.day === null) {
    state.day = day;
  }
};
parsers.E = function(state, info) {
  var count = lookAhead("E", state);
  var dayOfWeek = getIndexByName(formatNames(info, "days", count, false, true), state, true);
  if (dayOfWeek === null) {
    return true;
  }
};
parsers.M = function(state, info) {
  return parseMonth("M", state, info);
};
parsers.L = function(state, info) {
  return parseMonth("L", state, info);
};
parsers.y = function(state) {
  var count = lookAhead("y", state);
  var year = getNumber(count === 1 ? void 0 : count, state);
  if (year === null) {
    return true;
  }
  if (count === 2) {
    var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    year = currentYear - currentYear % 100 + year;
    if (year > TWO_DIGIT_YEAR_MAX) {
      year -= 100;
    }
  }
  state.year = year;
};
parsers.h = function(state) {
  lookAhead("h", state);
  var hours = getNumber(2, state);
  if (hours === 12) {
    hours = 0;
  }
  if (hours === null || outOfRange(hours, 0, 11)) {
    return true;
  }
  state.hours = hours;
};
parsers.K = function(state) {
  lookAhead("K", state);
  var hours = getNumber(2, state);
  if (hours === null || outOfRange(hours, 0, 11)) {
    return true;
  }
  state.hours = hours;
};
parsers.a = function(state, info) {
  var count = lookAhead("a", state);
  var periodFormats = formatNames(info, "dayPeriods", count, false, true);
  var pmHour = getIndexByName([periodFormats.pm], state, true);
  if (!pmHour && !getIndexByName([periodFormats.am], state, true)) {
    return true;
  }
  state.pmHour = pmHour;
};
parsers.H = function(state) {
  lookAhead("H", state);
  var hours = getNumber(2, state);
  if (hours === null || outOfRange(hours, 0, 23)) {
    return true;
  }
  state.hours = hours;
};
parsers.k = function(state) {
  lookAhead("k", state);
  var hours = getNumber(2, state);
  if (hours === null || outOfRange(hours, 1, 24)) {
    return true;
  }
  state.hours = hours === 24 ? 0 : hours;
};
parsers.m = function(state) {
  lookAhead("m", state);
  var minutes = getNumber(2, state);
  if (minutes === null || outOfRange(minutes, 0, 59)) {
    return true;
  }
  state.minutes = minutes;
};
parsers.s = function(state) {
  lookAhead("s", state);
  var seconds = getNumber(2, state);
  if (seconds === null || outOfRange(seconds, 0, 59)) {
    return true;
  }
  state.seconds = seconds;
};
parsers.S = function(state) {
  var count = lookAhead("S", state);
  var match = state.value.substr(state.valueIdx, count);
  var milliseconds = null;
  if (!isNaN(parseInt(match, 10))) {
    milliseconds = parseFloat("0." + match, 10);
    milliseconds = round(milliseconds, 3);
    milliseconds *= 1e3;
    state.valueIdx += count;
  }
  if (milliseconds === null || outOfRange(milliseconds, 0, 999)) {
    return true;
  }
  state.milliseconds = milliseconds;
};
parsers.z = function(state, info) {
  var count = lookAhead("z", state);
  var shortFormat = count < 4;
  var invalid = parseTimeZoneOffset(state, info, {
    shortHours: shortFormat,
    optionalMinutes: shortFormat,
    localizedName: true
  });
  if (invalid) {
    return invalid;
  }
};
parsers.Z = function(state, info) {
  var count = lookAhead("Z", state);
  var invalid = parseTimeZoneOffset(state, info, {
    noSeparator: count < 4,
    zLiteral: count === 5,
    localizedName: count === 4
  });
  if (invalid) {
    return invalid;
  }
};
parsers.x = function(state, info) {
  var count = lookAhead("x", state);
  var invalid = parseTimeZoneOffset(state, info, {
    noSeparator: count !== 3 && count !== 5,
    optionalMinutes: count === 1
  });
  if (invalid) {
    return invalid;
  }
};
parsers.X = function(state, info) {
  var count = lookAhead("X", state);
  var invalid = parseTimeZoneOffset(state, info, {
    noSeparator: count !== 3 && count !== 5,
    optionalMinutes: count === 1,
    zLiteral: true
  });
  if (invalid) {
    return invalid;
  }
};
parsers.G = function(state, info) {
  var count = lookAhead("G", state);
  var eras = formatNames(info, "eras", count, false, true);
  var era = getIndexByName([eras[0], eras[1]], state, true);
  if (era === null) {
    return true;
  }
};
parsers.e = function(state, info) {
  return parseDayOfWeek("e", state, info);
};
parsers.c = function(state, info) {
  return parseDayOfWeek("c", state, info);
};
function createDate(state) {
  var year = state.year;
  var month = state.month;
  var day = state.day;
  var hours = state.hours;
  var minutes = state.minutes;
  var seconds = state.seconds;
  var milliseconds = state.milliseconds;
  var pmHour = state.pmHour;
  var UTC = state.UTC;
  var hoursOffset = state.hoursOffset;
  var minutesOffset = state.minutesOffset;
  var hasTime = hours !== null || minutes !== null || seconds || null;
  var date = /* @__PURE__ */ new Date();
  var result;
  if (year === null && month === null && day === null && hasTime) {
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDate();
  } else {
    if (year === null) {
      year = date.getFullYear();
    }
    if (day === null) {
      day = 1;
    }
  }
  if (pmHour && hours < 12) {
    hours += 12;
  }
  if (UTC) {
    if (hoursOffset) {
      hours += -hoursOffset;
    }
    if (minutesOffset) {
      minutes += -minutesOffset * (hoursOffset < 0 ? -1 : 1);
    }
    result = new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
  } else {
    result = new Date(year, month, day, hours, minutes, seconds, milliseconds);
    adjustDST(result, hours);
  }
  if (year < 100) {
    result.setFullYear(year);
  }
  if (result.getDate() !== day && UTC === void 0) {
    return null;
  }
  return result;
}
function addFormatSpaces(value, format3) {
  var leadingSpaces = leadingSpacesRegex.exec(format3)[0];
  var trailingSpaces = trailingSpacesRegex.exec(format3)[0];
  return "" + leadingSpaces + value + trailingSpaces;
}
function parseExact(value, format3, info) {
  var pattern = datePattern(format3, info).split(EMPTY);
  var state = {
    format: pattern,
    idx: 0,
    value: addFormatSpaces(value, format3),
    valueIdx: 0,
    year: null,
    month: null,
    day: null,
    hours: null,
    minutes: null,
    seconds: null,
    milliseconds: null
  };
  var length = pattern.length;
  var literal = false;
  for (; state.idx < length; state.idx++) {
    var ch = pattern[state.idx];
    if (literal) {
      if (ch === "'") {
        literal = false;
      }
      checkLiteral(state);
    } else {
      if (parsers[ch]) {
        var invalid = parsers[ch](state, info);
        if (invalid) {
          return null;
        }
      } else if (ch === "'") {
        literal = true;
        checkLiteral(state);
      } else if (!checkLiteral(state)) {
        return null;
      }
    }
  }
  if (state.valueIdx < value.length) {
    return null;
  }
  return createDate(state) || null;
}
function parseMicrosoftDateOffset(offset) {
  var sign = offset.substr(0, 1) === "-" ? -1 : 1;
  var result = offset.substring(1);
  result = parseInt(result.substr(0, 2), 10) * 60 + parseInt(result.substring(2), 10);
  return sign * result;
}
function parseMicrosoftDateFormat(value) {
  if (value && value.indexOf("/D") === 0) {
    var date = dateRegExp.exec(value);
    if (date) {
      date = date[1];
      var tzoffset = offsetRegExp.exec(date.substring(1));
      date = new Date(parseInt(date, 10));
      if (tzoffset) {
        tzoffset = parseMicrosoftDateOffset(tzoffset[0]);
        date = convertTimeZone(date, date.getTimezoneOffset(), 0);
        date = convertTimeZone(date, 0, -1 * tzoffset);
      }
      return date;
    }
  }
}
function defaultFormats(calendar) {
  var formats = [];
  var patterns = calendar.patterns;
  var length = FORMATS_SEQUENCE.length;
  for (var idx = 0; idx < length; idx++) {
    formats.push(patterns[FORMATS_SEQUENCE[idx]]);
  }
  return formats.concat(standardDateFormats);
}
function parseDate(value, formats, locale) {
  if (locale === void 0) locale = DEFAULT_LOCALE;
  if (!value) {
    return null;
  }
  if (isDate(value)) {
    return value;
  }
  var parseValue = String(value).trim();
  var date = parseMicrosoftDateFormat(parseValue);
  if (date) {
    return date;
  }
  var info = localeInfo(locale);
  var parseFormats = formats || defaultFormats(info.calendar);
  parseFormats = Array.isArray(parseFormats) ? parseFormats : [parseFormats];
  var length = parseFormats.length;
  for (var idx = 0; idx < length; idx++) {
    date = parseExact(parseValue, parseFormats[idx], info);
    if (date) {
      return date;
    }
  }
  return date;
}

// node_modules/@progress/kendo-intl/dist/es/dates/split-date-format.js
var NAME_TYPES = {
  month: {
    type: "months",
    minLength: 3,
    standAlone: "L"
  },
  quarter: {
    type: "quarters",
    minLength: 3,
    standAlone: "q"
  },
  weekday: {
    type: "days",
    minLength: {
      E: 0,
      c: 3,
      e: 3
    },
    standAlone: "c"
  },
  dayperiod: {
    type: "dayPeriods",
    minLength: 0
  },
  era: {
    type: "eras",
    minLength: 0
  }
};
var LITERAL = "literal";
function addLiteral(parts, value) {
  var lastPart = parts[parts.length - 1];
  if (lastPart && lastPart.type === LITERAL) {
    lastPart.pattern += value;
  } else {
    parts.push({
      type: LITERAL,
      pattern: value
    });
  }
}
function isHour12(pattern) {
  return pattern === "h" || pattern === "K";
}
function splitDateFormat(format3, locale) {
  if (locale === void 0) locale = DEFAULT_LOCALE;
  var info = localeInfo(locale);
  var pattern = datePattern(format3, info);
  var parts = [];
  var lastIndex = dateFormatRegExp.lastIndex = 0;
  var match = dateFormatRegExp.exec(pattern);
  while (match) {
    var value = match[0];
    if (lastIndex < match.index) {
      addLiteral(parts, pattern.substring(lastIndex, match.index));
    }
    if (value.startsWith('"') || value.startsWith("'")) {
      addLiteral(parts, value);
    } else {
      var specifier = value[0];
      var type = DATE_FIELD_MAP[specifier];
      var part = {
        type,
        pattern: value
      };
      if (type === "hour") {
        part.hour12 = isHour12(value);
      }
      var names = NAME_TYPES[type];
      if (names) {
        var minLength = isNumber(names.minLength) ? names.minLength : names.minLength[specifier];
        var patternLength = value.length;
        if (patternLength >= minLength) {
          part.names = {
            type: names.type,
            nameType: dateNameType(patternLength),
            standAlone: names.standAlone === specifier
          };
        }
      }
      parts.push(part);
    }
    lastIndex = dateFormatRegExp.lastIndex;
    match = dateFormatRegExp.exec(pattern);
  }
  if (lastIndex < pattern.length) {
    addLiteral(parts, pattern.substring(lastIndex));
  }
  return parts;
}

// node_modules/@progress/kendo-intl/dist/es/format.js
var formatRegExp3 = /\{(\d+)(:[^}]+)?\}/g;
function toString(value, format3, locale) {
  if (format3) {
    if (isDate(value)) {
      return formatDate(value, format3, locale);
    } else if (isNumber(value)) {
      return formatNumber(value, format3, locale);
    }
  }
  return value !== void 0 && value !== null ? value : EMPTY;
}
function format(format3, values, locale) {
  return format3.replace(formatRegExp3, function(match, index, placeholderFormat) {
    var value = values[parseInt(index, 10)];
    return toString(value, placeholderFormat ? placeholderFormat.substring(1) : EMPTY, locale);
  });
}

// node_modules/@progress/kendo-angular-intl/fesm2020/progress-kendo-angular-intl.mjs
var packageMetadata = {
  name: "@progress/kendo-angular-intl",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1725978720,
  version: "16.9.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var DOCS_URL = "https://www.telerik.com/kendo-angular-ui/components/internationalization/troubleshooting/";
var errorSolutions = {
  "NoCurrency": `Solution: ${DOCS_URL}#toc-no-currency`,
  "NoCurrencyDisplay": `Solution: ${DOCS_URL}#toc-no-currency-display`,
  "NoCurrencyRegion": `Solution: ${DOCS_URL}#toc-no-currency-region`,
  "NoDateFieldNames": `Solution: ${DOCS_URL}#toc-no-date-filed-names`,
  "NoFirstDay": `Solution: ${DOCS_URL}#toc-no-first-day`,
  "NoGMTInfo": `Solution: ${DOCS_URL}#toc-no-gmt-info`,
  "NoLocale": `Solution: ${DOCS_URL}#toc-no-locale`,
  "NoValidCurrency": `Solution: ${DOCS_URL}#toc-no-valid-currency`,
  "NoWeekData": `Solution: ${DOCS_URL}#toc-no-week-data`
};
function formatMessage2(error2) {
  const message = error2.message;
  const errorSolution = errorSolutions[Object.keys(errorSolutions).filter((key) => message.indexOf(key) === 0)[0]];
  return errorSolution ? `${message} ${errorSolution}` : message;
}
function intlMethod(fn) {
  return function(...values) {
    try {
      return fn(...values);
    } catch (error2) {
      error2.message = formatMessage2(error2);
      throw error2;
    }
  };
}
var dateFormatNames2 = intlMethod(dateFormatNames);
var dateFieldName2 = intlMethod(dateFieldName);
var firstDay2 = intlMethod(firstDay);
var format2 = intlMethod(format);
var formatDate2 = intlMethod(formatDate);
var formatNumber2 = intlMethod(formatNumber);
var load2 = intlMethod(load);
var numberSymbols2 = intlMethod(numberSymbols);
var parseDate2 = intlMethod(parseDate);
var parseNumber2 = intlMethod(parseNumber);
var splitDateFormat2 = intlMethod(splitDateFormat);
var toString2 = intlMethod(toString);
var weekendRange2 = intlMethod(weekendRange);
var localeData = (locale) => {
  try {
    return localeInfo(locale);
  } catch (error2) {
    error2.message = formatMessage2(error2);
    throw error2;
  }
};
var LOCALE_REGEX = /_/g;
function cldrServiceFactory(localeId) {
  return new CldrIntlService(localeId);
}
var IntlService = class {
  /**
   * @hidden
   */
  constructor() {
    this.changes = new EventEmitter();
    validatePackage(packageMetadata);
  }
  /**
   * Notifies that the service was changed.
   */
  notify() {
    this.changes.emit();
  }
};
IntlService.ɵfac = function IntlService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IntlService)();
};
IntlService.ɵprov = ɵɵdefineInjectable({
  token: IntlService,
  factory: function IntlService_Factory2(__ngFactoryType__) {
    let __ngConditionalFactory__ = null;
    if (__ngFactoryType__) {
      __ngConditionalFactory__ = new __ngFactoryType__();
    } else {
      __ngConditionalFactory__ = cldrServiceFactory(ɵɵinject(LOCALE_ID));
    }
    return __ngConditionalFactory__;
  },
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntlService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: cldrServiceFactory,
      deps: [LOCALE_ID]
    }]
  }], function() {
    return [];
  }, null);
})();
var CldrIntlService = class extends IntlService {
  /**
   * Creates a new instance of the service with the ID of the specified locale.
   *
   * Note that the parts of the locale ID can be separated by either `_` (underscore)
   * or `-` (dash).
   *
   * @param localeId - The default locale ID.
   */
  constructor(localeId) {
    super();
    this.localeId = localeId;
  }
  /**
   * Gets or sets the current locale ID.
   */
  get localeId() {
    return this.locale;
  }
  set localeId(value) {
    const locale = value.replace(LOCALE_REGEX, "-");
    if (locale !== this.locale) {
      this.locale = locale;
      this.notify();
    }
  }
  /**
   * Formats a string with placeholders such as
   * `Total amount {0:c}`.
   *
   * @param format - The format string.
   * @param values - One or more values to output in the format string placeholders.
   * @return - The formatted string.
   */
  format(format$1, ...values) {
    return format2(format$1, values, this.localeId);
  }
  /**
   * Converts an object into a string based on the specified format.
   *
   * @param value - The value to format.
   * @param format - The format to use.
   * @param localeId - The locale ID to use in place of the default one. Optional.
   * @return The formatted object.
   */
  toString(value, format3, localeId) {
    return toString2(value, format3, localeId || this.localeId);
  }
  /**
   * Converts a `Date` object into a string based on the specified format.
   * If no format is provided, the default short date format is used.
   *
   * @param value - The date to format.
   * @param format - The format string or options.
   * @param localeId - The locale ID to use in place of the default one. Optional.
   * @return The formatted date.
   */
  formatDate(value, format3, localeId) {
    return formatDate2(value, format3, localeId || this.localeId);
  }
  /**
   * Converts a string into a `Date` object based on the specified format.
   *
   * @param value - The string to convert.
   * @param format - The format strings or options.
   * @param localeId - The locale ID to use in place of the default one. Optional.
   * @return The parsed date.
   */
  parseDate(value, format3, localeId) {
    return parseDate2(value, format3, localeId || this.localeId);
  }
  /**
   * Converts a string into a `Number`.
   *
   * @param value - The string to convert.
   * @param format - The format string or options.
   * @param localeId - The locale ID to use in place of the default one. Optional.
   * @return The parsed number.
   */
  parseNumber(value, format3, localeId) {
    return parseNumber2(value, localeId || this.localeId, format3);
  }
  /**
   * Converts a `Number` into a string based on the specified format.
   *
   * @param value - The number to format.
   * @param format - The format string or options.
   * @param localeId - The locale ID to use in place of the default one. Optional.
   * @return The formatted number.
   */
  formatNumber(value, format3, localeId) {
    return formatNumber2(value, format3, localeId || this.localeId);
  }
  /**
   * Returns the date names from the current locale based on the option.
   *
   * The available `type` values are:
   * - `era`
   * - `year`
   * - `quarter`
   * - `month`
   * - `week`
   * - `day`
   * - `dayperiod`
   * - `hour`
   * - `minute`
   * - `second`
   * - `zone`
   *
   * The available `nameType` values are:
   * - `wide`
   * - `narrow`
   * - `short`
   *
   * @param options - Detailed configuration for the desired date field name.
   * @param localeId - The locale ID to use in place of the default one. Optional.
   * @return - The day names from the current locale based on the option.
   * @returns The localized date field name from the current locale based on the option.
   *
   * @example
   * ```ts
   * dateFieldName({ type: 'day' });                      //returns 'day';
   * dateFieldName({ type: 'day', nameType: 'wide' });    //returns 'day';
   * dateFieldName({ type: 'month', nameType: 'short' }); //returns 'mo.';
   * dateFieldName({ type: 'month', nameType: 'wide' });  //returns 'month';
   * ```
   */
  dateFieldName(options, localeId) {
    return dateFieldName2(options, localeId || this.localeId);
  }
  /**
   * Returns a localized date field name based on specific dateFieldName options.
   *
   * The available type values are:
   * - `day`
   * - `dayperiod`
   * - `months`
   * - `quarters`
   * - `eras`
   *
   * @param options - Detailed configuration for the desired date format.
   * @param localeId - The locale ID to use in place of the default one. Optional.
   * @return - The day names from the current locale based on the option.
   */
  dateFormatNames(options, localeId) {
    return dateFormatNames2(localeId || this.localeId, options);
  }
  /**
   * Splits the date format into objects containing information about each part of the pattern.
   *
   * @param format The format string or options.
   * @param localeId The optional locale id. If not specified, the `"en"` locale id is used.
   * @returns The date format parts.
   */
  splitDateFormat(format3, localeId) {
    return splitDateFormat2(format3, localeId || this.localeId);
  }
  /**
   * Returns the number symbols from the current locale based on the option.
   *
   * @param localeId - The locale ID to use in place of the default one. Optional.
   * @return - The number symbols from the current locale.
   */
  numberSymbols(localeId) {
    return numberSymbols2(localeId || this.localeId);
  }
  /**
   * Returns the first day index starting from Sunday.
   *
   * @param localeId - The locale ID. Defaults to the current locale ID.
   * @return - The index of the first day of the week (0 == Sunday).
   */
  firstDay(localeId) {
    return firstDay2(localeId || this.localeId);
  }
  /**
   * Returns the start and end index of the locale weekend starting from Sunday.
   *
   * @param localeId - The locale ID. Defaults to the current locale ID.
   * @return - The start and end index of the locale weekend (0 == Sunday).
   */
  weekendRange(localeId) {
    return weekendRange2(localeId || this.localeId);
  }
};
CldrIntlService.ɵfac = function CldrIntlService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CldrIntlService)(ɵɵinject(LOCALE_ID));
};
CldrIntlService.ɵprov = ɵɵdefineInjectable({
  token: CldrIntlService,
  factory: CldrIntlService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CldrIntlService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LOCALE_ID]
      }]
    }];
  }, null);
})();
var isNumeric = (value) => !isNaN(value - parseFloat(value));
var DatePipe = class {
  /**
   * @hidden
   */
  constructor(intlService) {
    this.intlService = intlService;
  }
  /**
   * Converts a `Date` object into a string based on the specified format.
   * If no format is provided, the default short date format is used.
   *
   * @param value - The date to format.
   * @param format - The format string or options.
   * @param localeId - (Optional) The ID of the locale which will be used instead of the default one.
   * @return - The formatted date.
   */
  transform(value, format3 = "", localeId) {
    value = this.normalize(value);
    if (value) {
      return this.intlService.formatDate(value, format3, localeId);
    }
    return value;
  }
  normalize(value) {
    if (value && typeof value === "string") {
      value = this.intlService.parseDate(value);
    } else if (value && isNumeric(value)) {
      value = new Date(parseFloat(value));
    }
    return value;
  }
};
DatePipe.ɵfac = function DatePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DatePipe)(ɵɵdirectiveInject(IntlService, 16));
};
DatePipe.ɵpipe = ɵɵdefinePipe({
  name: "kendoDate",
  type: DatePipe,
  pure: true,
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePipe, [{
    type: Pipe,
    args: [{
      name: "kendoDate",
      standalone: true
    }]
  }], function() {
    return [{
      type: IntlService
    }];
  }, null);
})();
var NumberPipe = class {
  /**
   * @hidden
   */
  constructor(intlService) {
    this.intlService = intlService;
  }
  /**
   * Converts a `Number` object into a string based on the specified format.
   * If no format is provided, the value is formatted as decimal number using the
   * [`"n"`](https://github.com/telerik/kendo-intl/blob/master/docs/num-formatting/index.md#standard) format.
   *
   * @param value - The numer that will be formatted.
   * @param format - The format string or options.
   * @param localeId - (Optional) The locale ID that will be used in place of the default one.
   * @return - The formatted number.
   */
  transform(value, format3, localeId) {
    if (typeof value === "string") {
      value = this.intlService.parseNumber(value);
    }
    if (value !== null && value !== void 0) {
      return this.intlService.formatNumber(value, format3, localeId);
    }
    return value;
  }
};
NumberPipe.ɵfac = function NumberPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NumberPipe)(ɵɵdirectiveInject(IntlService, 16));
};
NumberPipe.ɵpipe = ɵɵdefinePipe({
  name: "kendoNumber",
  type: NumberPipe,
  pure: true,
  standalone: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberPipe, [{
    type: Pipe,
    args: [{
      name: "kendoNumber",
      standalone: true
    }]
  }], function() {
    return [{
      type: IntlService
    }];
  }, null);
})();
var KENDO_NUMBER = [NumberPipe];
var KENDO_DATE = [DatePipe];
var KENDO_INTL = [...KENDO_NUMBER, ...KENDO_DATE];
var IntlModule = class {
};
IntlModule.ɵfac = function IntlModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IntlModule)();
};
IntlModule.ɵmod = ɵɵdefineNgModule({
  type: IntlModule,
  imports: [NumberPipe, DatePipe],
  exports: [NumberPipe, DatePipe]
});
IntlModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntlModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_INTL],
      exports: [...KENDO_INTL]
    }]
  }], null, null);
})();

export {
  toString,
  localeData,
  IntlService,
  DatePipe
};
//# sourceMappingURL=chunk-CW2GONGA.js.map

import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

function padNumber(value: number) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return '';
    }
}

function isNumber(value: any): boolean {
    return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}


@Injectable()
export class NgbDateMXParserFormatter extends NgbDateParserFormatter {
    parse(value: string): NgbDateStruct {
        if (value) {
            const dateParts = value.trim().split('/');
            this.getNgDateParseFormatter(dateParts);
        }
        return null;
    }

    format(date: NgbDateStruct): string {
        let stringDate = '';
        if (date) {
            stringDate += isNumber(date.day) ? padNumber(date.day) + '/' : '';
            stringDate += isNumber(date.month) ? padNumber(date.month) + '/' : '';
            stringDate += date.year;
        }
        return stringDate;
    }

    private isOnlyYear(dateParts: string[]): boolean {
        return dateParts.length === 1 && isNumber(dateParts[0]);
    }

    private isMonthAndYear(dateParts: string[]): boolean {
        return dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1]);
    }

    private isDayMonthAndYear(dateParts: string[]): boolean {
        return dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2]);
    }

    private resultDate(year: string, month: string, day: string): NgbDateStruct {
        return {year: toInteger(year), month: toInteger(month), day: toInteger(day)};
    }

    private getNgDateParseFormatter(dateParts: string[]): NgbDateStruct {
        if (this.isOnlyYear(dateParts)) {
            return this.resultDate(dateParts[0], null, null);
        } else if (this.isMonthAndYear(dateParts)) {
            return this.resultDate(dateParts[1], dateParts[0], null);
        } else if (this.isDayMonthAndYear(dateParts)) {
            return this.resultDate(dateParts[2], dateParts[1], dateParts[0]);
        }
    }
}

import { Subject } from 'rxjs';

export class subjectManager {
	subject = new Subject();

	get subject() {
		return this.subject.asObservable();
	}

	set setSubject(value) {
		this.subject.next(value);
	}
}

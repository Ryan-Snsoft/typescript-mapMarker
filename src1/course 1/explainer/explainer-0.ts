type User = {
    name: string;
    age: number;
    isAdmin: boolean;
}


type NameOrAge = User["name" | "age"]; 

// type Age = User["age"];


// keyof

type Keys = keyof User; 

type ValueOf<Obj> = Obj[keyof Obj];

type UserValues = ValueOf<User>;


// Optional Properties
type BlogPost = { title: string; tags?: string[] };

const blogPost1 = {
    title: "bali tri["
};

const blogPost2 = {
    title: "bali tri[",
    tags: ["bali", "trip", "fun"]
};


// Merge object types with intersections
type WithName = { name: string };
type WithAge = { age: number };
type WithRole = { isAdmin: boolean };

type UserMerged = WithName & WithAge & WithRole;

type Company = WithName & WithAge; 


// Intersections of objects and unions of keys

type A = { a: string };
type KeyOfA = keyof A;

type B = { b: string };
type KeyOfB = keyof B;

type C = A & B;
type KeyOfC = keyof C;

// Records

type RecordOfBooleans = {[key: string]: boolean};

type RecordOfBooleans2 = Record<string, boolean>;

type State = {valid: boolean, edited: boolean, focused: boolean};

type StateRecord = Record<"valid" | "edited" | "focused", boolean>;

type ValueType = RecordOfBooleans[string];

// Helper Functions

type Props = { value: string; focused: boolean; edited: boolean};
type Props2 = { value: string; focused?: boolean; edited: boolean};

type PartialProps = Partial<Props>;
type RequiredProps = Required<Props2>;
  
type ValueProps = Pick<Props, "value">;
type SomeProps = Pick<Props, "edited" | "focused">;

type ValueOmit = Omit<Props, "value">;
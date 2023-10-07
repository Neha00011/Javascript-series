//global execution context 
//function execution context
//eval execution context


//memory creation phase
//execution phase

//1.global execution->this
//2.memory phase->val1->undefined,
//                val2->undefined,
//                addnum->defination
//                result1>undefined
//                result2->undefined
//3.execution phase->val1<-10
//                   val2<-5
//                   addnum->new execution context(new variable environment +execution thread)

//for addnum memory phase val1->undefined
//                        val2->undefined
//                        total->undefined
//            execution context num1->10
//                              num2->5
//                               ->15(return to global execution context)
//then delete

//now result1=15
//for result2(same like result1)


//call stack 
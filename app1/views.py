from django.shortcuts import render

# Create your views here.
def home(request):
    nm="sumit"
    age=20
    return render(request,'home.html',context={'name':nm,'age':age})

def about(request):
    return render(request,'about.html')

def contact(request):
    return render(request,'contact.html')

def services(request):
    return render(request,'services.html')

def studentinfo(request):
    studentdata=[
        {'rollno':101,'name':'aaa','age':'20','city':'delhi','marks':45},
        {'rollno':102,'name':'aasd','age':'50','city':'indore','marks':78},
        {'rollno':103,'name':'asddsa','age':'30','city':'mumabai','marks':85}
    ]
    return render(request,'studentdetails.html',context={'data':studentdata})

def teacherinfo(request):
    teacherdata=[
        {'name':'bhshs','age':'26','city':'Bhopal','subject':'SEAM'},
        {'name':'aasd','age':'50','city':'indore','subject':'OOP'},
        {'name':'asddsa','age':'30','city':'Pune','subject':'DBMS'}
    ]
    return render(request,'teacherdetails.html',context={'data':teacherdata})

def demo(request):
    li=[10,20,30,40,50,4,3,2,5]

    return render(request,'ifelse.html',context={'list':li})

def check_marks(request):
    marks=84
    return render(request,'marks.html',context={'m':marks,})

def test(request):
    return render(request,'test.html')
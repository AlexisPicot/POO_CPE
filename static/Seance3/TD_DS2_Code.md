---
export_on_save:
  html: true
---

```java
public class DS {

    	public static void main(String[] args) {
    	
        ConstructeurAutomobile myManufacturer = new Renault();
      
        Car car1 = myManufacturer.constructSportsCar();
        System.out.println(car1);
        car1.start();
        car1.go("221b, Baker Street, London", "Scotland Yard, 8-10 Broadway, London");
        System.out.println(car1.getTripComputer());
        car1.stop();


/* la suite de la fonction main() concerne les questions 3.2 et 3.3  */

        
        Car car2 = myManufacturer.constructCityCar();
            
        Car car3 = myManufacturer.constructSUV();
        
        List<Car> carList = new LinkedList<Car>();
        carList.add(car1);
        carList.add(car2);
        carList.add(car3);

        printList(carList);
        printRoute(carList, CarType.SPORTS_CAR);
}

	private static void printList(List<Car> carList) {
		







	}
	
	private static void printRoute(List<Car> carList, CarType carType) {
		








	}
}

enum CarType {
    CITY_CAR, SPORTS_CAR, SUV
}


enum Transmission {
    SINGLE_SPEED, MANUAL, AUTOMATIC, SEMI_AUTOMATIC
}


/**
 * ConstructeurAutomobile defines the order of building steps. It works with a myFactory object
 * through common CarFactory interface. Therefore it may not know what product is
 * being built.
 */
interface ConstructeurAutomobile {
	
    public Car constructSportsCar() ;
    public Car constructCityCar() ;
    public Car constructSUV() ;

}


abstract class AbstractConstructeur implements ConstructeurAutomobile {
	CarFactory myFactory;
	  
	public AbstractConstructeur() {
		super();
		myFactory = new CarFactoryStandard();
	}

	protected Car constructCar( 
			CarType carType, 
			int seatNb, 
			double volume, 
			int power, 
			Transmission transmission, 
			boolean isTripComputer,
			boolean isGPSNavigator) {
		
		 myFactory.setCarType(carType);
	        myFactory.setSeats(seatNb);
	        myFactory.setEngine(volume, power);
	        myFactory.setTransmission(transmission);
	        myFactory.setTripComputer(isTripComputer);
	        myFactory.setGPSNavigator(isGPSNavigator);
	        return myFactory.getCar();
	}

	@Override
	abstract public  Car constructSportsCar() ;

	@Override
	abstract public Car constructCityCar() ;

	@Override
	abstract public Car constructSUV() ;
}


class Renault extends AbstractConstructeur {
	
    public Car constructSportsCar() {

    	return constructCar(CarType.SPORTS_CAR, 2, 3.0, 200,Transmission.SEMI_AUTOMATIC, true, true);
    }

    public Car constructCityCar() {
    	
    	return constructCar(CarType.CITY_CAR, 2, 1.2, 100,Transmission.SEMI_AUTOMATIC, true, true);
    }

    public Car constructSUV() {
    	
    	return constructCar(CarType.SUV, 4, 2.5, 150, Transmission.MANUAL, true, false);
    }
}


/**
 * CarFactory interface defines all possible ways to configure a Car.
 */

interface CarFactory {

    public void setCarType(CarType type);
    public void setSeats(int seats);
    public void setEngine(double volume, int power);
    public void setTransmission(Transmission transmission);
    public void setTripComputer(boolean tripComputer);
    public void setGPSNavigator(boolean gpsNavigator);
    public Car getCar();
}


/**
 * Concrete CarFactory implement steps defined in the common interface.
 */

class CarFactoryStandard implements CarFactory {

    private CarType type;
    private int seats;
    private Engine engine;
    private Transmission transmission;
    private TripComputer tripComputer;
    private GPSNavigator gpsNavigator;

    public void setCarType(CarType type) {

        this.type = type;
    }

    @Override
    public void setSeats(int seats) {

        this.seats = seats;
    }

    @Override
    public void setEngine(double volume, int power) {

        this.engine = new Engine(volume, power);
    }

    @Override
    public void setTransmission(Transmission transmission) {

        this.transmission = transmission;
    }

    @Override
    public void setTripComputer(boolean isTripComputer) {

    	this.tripComputer = null;
    	if  (isTripComputer)	
    		this.tripComputer = new TripComputer();
    }

    @Override
    public void setGPSNavigator(boolean isGpsNavigator) {

        this.gpsNavigator = null;
        if (isGpsNavigator)
        	 this.gpsNavigator = new GPSNavigator();
    }

    public Car getCar() {
        return new Car(type, seats, engine, transmission, tripComputer, gpsNavigator);
    }
}
class Car {
    private final CarType carType;
    private final int seats;
    private final Engine engine;
    private final Transmission transmission;
    private final TripComputer tripComputer;
    private final GPSNavigator gpsNavigator;
    private double fuel = 2;

    public Car(CarType carType, int seats, Engine engine, Transmission transmission,
               TripComputer tripComputer, GPSNavigator gpsNavigator) {
        this.carType = carType;
        this.seats = seats;
        this.engine = engine;
        this.transmission = transmission;
        this.tripComputer = tripComputer;
        if (this.tripComputer != null) {
            this.tripComputer.setCar(this);
        }
        this.gpsNavigator = gpsNavigator;
    }

    public double getFuel() {
        return fuel;
    }

    public TripComputer getTripComputer() {
        return tripComputer;
    }

    public double getMileage() {
		return engine.getMileage();
    }

    public String getRoute() {
    	String route = "";
    	if (gpsNavigator!=null)
    		route = gpsNavigator.getRoute();
    	return route;
    }
    
    public void setFuel(double fuel) {
        this.fuel = fuel;
    }

    public void start() {
        engine.on();
    }

    public boolean isStarted() {





    }

    public void go(String begin, String end) {
    	if(gpsNavigator != null) 
    		gpsNavigator.setRoute(begin, end);
        engine.go();
    }

    public void stop() {
        






    }
    public String toString() {

        String info = "";
        info += "Type of car: " + carType + "\n";
        info += "Count of seats: " + seats + "\n";
        info += "Engine: volume - " + engine.getVolume() + "; power - " + engine.getPower() + "; 
   mileage - "+ engine.getMileage() +  "\n";
        info += "Transmission: " + transmission + "\n";
        if (this.tripComputer != null) {
            info += "Trip Computer: Functional" + "\n";
        } else {
            info += "Trip Computer: N/A" + "\n";
        }
        if (this.gpsNavigator != null) {
            info += "GPS Navigator: Functional" + "\n";
        } else {
            info += "GPS Navigator: N/A" + "\n";
        }
        return info;
    }







}

class Engine {
    private final double volume;
    private double power;
    private double mileage;
    private boolean started;

    public Engine(double volume, double power) {
        this.volume = volume;
        this.power = power;
        this.mileage = 0;
        this.started = false;
    }

    public void on() {
        started = true;
    }

    public void off() {
        started = false;
    }

    public boolean isStarted() {
        return started;
    }

    public void go() {
        if (started) {
            this.mileage += 1; /* s'incrémente en fonction kilomètres parcourus */
        }
    }

    public double getVolume() {
        return volume;
    }
    
    public double getPower() {
        return power;
    }

    public double getMileage() {
        return mileage;
    }
}
class GPSNavigator {
    private String begin, end;

    public GPSNavigator() {
    }
  
    public void setRoute(String begin, String end) {
		this.begin = begin;
		this.end = end;
    }

    public String getRoute() {
        	return "from " + begin + " to " + end;
    }
    
    public double getDistance() {
		return 0 /* distance sera calculée à partir de route suivie */;
    }

}


class TripComputer {

    private Car car;

    public void setCar(Car car) {
        	this.car = car;
    }
    
    public String toString() {
        String info = "";
        info += "Fuel level: " + car.getFuel() + "\n";
        info += "Is car started? " + car.isStarted() + "\n";
        info += "Route: " + car.getRoute() + "\n";
        info += "Milage: " + car.getMileage() + "\n";
        return info;
    }
}


```